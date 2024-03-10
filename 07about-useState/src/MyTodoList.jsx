import { useState } from "react";

function MyTodoList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTask] = useState([
    "Eat breakfast",
    "Take a shower",
    "Learn React.js",
  ]);

  // function to handle input
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  // function for adding task
  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      // resetting input
      setNewTask("");
    }
  }

  // function to delete task
  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);

    setTask(updatedTask);
  }

  // function to move task up
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  // function to move task down
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  return (
    <div className="todo-list-container">
      <h1>Todo list</h1>

      {/* Todo Form */}
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="btn-add-todo" onClick={addTask}>
          Add task
        </button>
      </div>
      {/* Todo list items */}

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>{" "}
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="btn-move-up" onClick={() => moveTaskUp(index)}>
              🔼
            </button>
            <button
              className="btn-move-down"
              onClick={() => moveTaskDown(index)}
            >
              🔻
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyTodoList;
