import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { filteredTodos, filter } = useTodo();

  if (filteredTodos.length === 0) {
    const messages = {
      all: "Sua lista está vazia. Adicione a primeira tarefa!",
      pending: "Não há tarefas pendentes. Muito bem!",
      completed: "Você ainda não concluiu nenhuma tarefa.",
    };

    return (
      <div className="empty-state">
        <span className="empty-icon" aria-hidden="true">✦</span>
        <p>{messages[filter]}</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
