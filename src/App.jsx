import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);
  let [inputValue, setInputValue] = useState("");

  // Add Todo
  const addOrUpdateTodo = (name) => {
    if (inputValue !== "") {
      // Update existing todo
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === inputValue.id ? { ...todo, name } : todo
        )
      );
      setInputValue(""); // Reset the editing state
    } else {
      // Add new todo
      setTodos((prevTodos) => [
        ...prevTodos,
        { name, id: Math.random(), completed: false },
      ]);
    }
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Checkbox
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit Todo
  const editTodo = (id, name) => {
    setInputValue({ id, name }); // Pass an object with id and name properties
  };

  return (
    <div className="w-[400px] mx-auto p-3 my-10 border space-y-[10px] bg-gray-100 rounded">
      <h1 className="text-center font-bold text-[20px]">Todo App</h1>
      <TodoForm
        onSaveClick={(name) => addOrUpdateTodo(name)}
        inputValue={inputValue}
      />
      <TodoItems
        todos={todos}
        onDelete={(id) => deleteTodo(id)}
        onEditTodo={(id, name) => editTodo(id, name)}
        onToggleComplete={(id) => toggleComplete(id)}
      />
    </div>
  );
}

export default App;
