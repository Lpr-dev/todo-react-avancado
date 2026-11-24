import { createContext, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todo-react-avancado-tarefas", []);
  const [filter, setFilter] = useState("all");

  function addTodo(title) {
    const newTodo = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
    };

    setTodos((currentTodos) => [newTodo, ...currentTodos]);
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function removeTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  const filteredTodos = useMemo(() => {
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  }, [todos, filter]);

  const counts = useMemo(
    () => ({
      all: todos.length,
      completed: todos.filter((todo) => todo.completed).length,
      pending: todos.filter((todo) => !todo.completed).length,
    }),
    [todos]
  );

  const contextValue = useMemo(
    () => ({
      todos,
      filter,
      setFilter,
      filteredTodos,
      counts,
      addTodo,
      toggleTodo,
      removeTodo,
    }),
    [todos, filter, filteredTodos, counts]
  );

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo deve ser usado dentro de TodoProvider.");
  }

  return context;
}
