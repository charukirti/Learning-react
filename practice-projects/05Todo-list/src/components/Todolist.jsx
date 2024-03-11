import PropTypes from "prop-types";

function TodoList({ tasks, deleteTask, moveTaskUp, moveTaskDown }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li className="task-list-item" key={index}>
          <span className="text">{task}</span>{" "}
          <button className="delete-btn" onClick={() => deleteTask(index)}>
            Delete
          </button>
          <button
            className="btn-move-up"
            onClick={() => moveTaskUp(index)}
            title="Move Up"
          >
            🔼
          </button>
          <button
            className="btn-move-down"
            onClick={() => moveTaskDown(index)}
            title="Move down"
          >
            🔻
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  moveTaskUp: PropTypes.func.isRequired,
  moveTaskDown: PropTypes.func.isRequired,
};
