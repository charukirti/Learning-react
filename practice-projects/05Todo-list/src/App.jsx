import { useState } from "react";
import AddTodoItem from "./components/AddTodoInput";
import TodoList from "./components/Todolist";

function App() {
  const [tasks, setTasks] = useState([]); // default tasks

  /*  function to add task */

  function addTask(newTask) {
    setTasks((t) => [...t, newTask]);
  }

  /* function delete task */
  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);

    setTasks(updatedTask);
  }

  /* function to move tasks up */
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  /* function to move task down */
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-wrapper">
      <h1>Todo List</h1>
      <div className="todo-list-container">
        <AddTodoItem addTask={addTask} />
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          moveTaskUp={moveTaskUp}
          moveTaskDown={moveTaskDown}
        />
      </div>
    </div>
  );
}

export default App;
