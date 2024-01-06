import { useState, useEffect } from "react";

function TodoForm({ onSaveClick, inputValue }) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(inputValue && inputValue.name ? inputValue.name : "");
  }, [inputValue]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    if (name.trim()) {
      onSaveClick(name);
      setName("");
    }
  };

  // When user presses 'Enter' on input
  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      e.preventDefault(); // Prevent the default form submission
      handleClick();
    }
  };

  return (
    <div className="flex space-x-[10px]">
      <input
        value={name}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        type="text"
        placeholder="Add a new todo..."
        className="flex-1 h-[35px] px-4 border outline-none"
      />
      <button
        disabled={!name || (typeof name === "string" && !name.trim())}
        onClick={handleClick}
        className="disabled:opacity-30 h-[35px] bg-blue-500 text-white rounded px-8 text-[23px] inline-flex justify-center items-center"
      >
        +
      </button>
    </div>
  );
}

export default TodoForm;
