import PropTypes from "prop-types";

function TodoList( {tasks, deleteTask, moveTaskUp, moveTaskDown} ) {
  return (
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
          <button className="btn-move-down" onClick={() => moveTaskDown(index)}>
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
