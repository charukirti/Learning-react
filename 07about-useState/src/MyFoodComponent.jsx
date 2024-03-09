import { useState } from "react";

function MyFoodComponent() {
  const [foods, setFood] = useState(["Banana", "Orange", "Grapes"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFood((food) => [...food, newFood]);
  }

  function handleRemoveFood(index) {
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
