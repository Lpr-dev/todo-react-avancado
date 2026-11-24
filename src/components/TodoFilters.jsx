import { memo } from "react";
import { useTodo } from "../context/TodoContext";

const filters = [
  { id: "all", label: "Todas" },
  { id: "pending", label: "Pendentes" },
  { id: "completed", label: "Concluídas" },
];

function TodoFilters() {
  const { filter, setFilter, counts } = useTodo();

  return (
    <div className="filters" aria-label="Filtrar tarefas">
      {filters.map((item) => (
        <button
          key={item.id}
          type="button"
          className={filter === item.id ? "filter-button active" : "filter-button"}
          onClick={() => setFilter(item.id)}
          aria-pressed={filter === item.id}
        >
          {item.label}
          <span className="filter-count">{counts[item.id]}</span>
        </button>
      ))}
    </div>
  );
}

export default memo(TodoFilters);
