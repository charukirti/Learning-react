import { createContext, useState, useEffect, useContext } from "react";
const BASE_URL = "http://localhost:9000";

const CitesContext = createContext();

function CitesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.log(error);
        alert("There was an error while loading the data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      console.log(error);
      alert("There was an error while loading the data");
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-type": "application/json"
        },
      });
      const data = await res.json();
setCities(cities => [...cities, data])
    } catch (error) {
      console.log(error);
      alert("There was an error while creating city");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
setCities(cities => cities.filter(city => city.id !== id))
    } catch (error) {
      console.log(error);
      alert("There was an error while deleting data");
    } finally {
      setIsLoading(false);
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
