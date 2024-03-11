import PropTypes from "prop-types";
import { useState } from "react";

function AddTodoInput({ addTask }) {
  const [newTask, setNewTasks] = useState("");

  // function to handle input change
  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  // function to submit task
  function handleAddTask() {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTasks("");
    } else {
      alert('Input cannot be empty')
    }
  }

  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />

      <button className="btn-add-todo" onClick={handleAddTask}>
        Add task
      </button>
    </div>
  );
}

export default AddTodoInput;

AddTodoInput.propTypes = {
  addTask: PropTypes.func.isRequired,
};
