import { useTodo } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

export default function App() {
  const { counts } = useTodo();

  return (
    <main className="page">
      <section className="todo-card">
        <header className="header">
          <div className="brand-mark" aria-hidden="true">✓</div>
          <p className="eyebrow">ORGANIZE SEU DIA</p>
          <h1>Minhas tarefas</h1>
          <p className="subtitle">Um passo de cada vez. Você consegue!</p>
        </header>

        <TodoForm />
        <TodoFilters />
        <TodoList />

        <footer className="footer">
          <span>{counts.pending} {counts.pending === 1 ? "tarefa pendente" : "tarefas pendentes"}</span>
          <span>Salvo automaticamente neste navegador</span>
        </footer>
      </section>
      <p className="page-note">Feito com React e foco no que importa.</p>
    </main>
  );
}
