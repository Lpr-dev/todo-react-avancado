import { useState } from "react";
import { useTodo } from "../context/TodoContext";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodo();

  function handleSubmit(event) {
    event.preventDefault();

    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    addTodo(cleanTitle);
    setTitle("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="todo-title">
        Descrição da tarefa
      </label>
      <input
        id="todo-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="O que você precisa fazer?"
        maxLength={100}
      />
      <button className="add-button" type="submit" disabled={!title.trim()}>
        <span aria-hidden="true">+</span> Adicionar
      </button>
    </form>
  );
}
