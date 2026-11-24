import { memo } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <li className={todo.completed ? "todo-item completed" : "todo-item"}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className="custom-check" aria-hidden="true"></span>
        <span className="todo-title">{todo.title}</span>
      </label>

      <button
        className="delete-button"
        type="button"
        onClick={() => removeTodo(todo.id)}
        aria-label={`Excluir tarefa: ${todo.title}`}
        title="Excluir tarefa"
      >
        ×
      </button>
    </li>
  );
}

export default memo(TodoItem);
