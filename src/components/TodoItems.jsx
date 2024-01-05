function TodoItems({ todos, onDelete, onEditTodo, onToggleComplete }) {
  return (
    <div className="space-y-[10px]">
      {todos.map((todo, index) => (
        <div
          key={index}
          className={`border p-3 rounded flex justify-between items-center ${
            todo.completed ? "line-through" : ""
          }`}
        >
          <div className="space-x-[5px]">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
              className="cursor-pointer"
            />
            <span className="font-bold">{index + 1}.</span>
            <span>{todo.name}</span>
          </div>
          <div className="space-x-[10px]">
            <button
              onClick={() => {
                onEditTodo(todo.id, todo.name);
              }}
              disabled={todo.completed}
              className={`inline-flex justify-center items-center rounded bg-green-500 text-white px-2 h-8 ${
                todo.completed ? "opacity-40" : ""
              }`}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              disabled={todo.completed}
              className={`h-8 px-2 rounded inline-flex justify-center items-center bg-red-500 text-white ${
                todo.completed ? "opacity-50" : ""
              }`}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItems;
