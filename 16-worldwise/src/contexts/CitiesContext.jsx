import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
const BASE_URL = "http://localhost:9000";

const CitesContext = createContext();

// initialState

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

// reducer function

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {}
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function CitesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        // setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "rejected",
          payload: "There was an error while loading the cities",
        });
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {

    if(Number(id) === currentCity.id) return;

    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "rejected",
        payload: "There was an error while loading the city",
      });
    }
  }

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({type: 'city/created', payload: data})
    } catch (error) {
      console.log(error);
      dispatch({
        type: "rejected",
        payload: "There was an error while creating city",
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({type: 'city/deleted', payload: id})
    } catch (error) {
      console.log(error);
      dispatch({
        type: "rejected",
        payload: "There was an error while deleting the city",
      });
    }
  }
  return (
    <CitesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitesContext.Provider>
  );
}

// custom hook to consume context
function useCities() {
  const context = useContext(CitesContext);
  if (context === undefined)
    throw new Error("Context is used outside of the CitiesProvider");
  return context;
}

export { CitesProvider, useCities };
