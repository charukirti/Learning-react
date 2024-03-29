import { useState } from "react";

function MyFoodComponent() {
  const [foods, setFood] = useState(["Banana", "Orange", "Grapes"]);

  // Adds new food to the list
  function handleAddFood() {
    // gets the value from the input
    const newFood = document.getElementById("foodInput").value;

    // Clears the input
    document.getElementById("foodInput").value = "";

    // adds the new food item to the array and updates the state
    setFood((food) => [...food, newFood]);
  }

  // Removes a food item from the list by its index
  function handleRemoveFood(index) {
    // Updates the 'foods' state by filtering out the item at the specified index
    setFood(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}

export default MyFoodComponent;
