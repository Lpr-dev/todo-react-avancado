import { useEffect, useState } from "react";

// Hook personalizado: mantém um estado sincronizado com o localStorage.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      return savedValue !== null ? JSON.parse(savedValue) : initialValue;
    } catch (error) {
      console.error("Não foi possível ler o localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Não foi possível salvar no localStorage:", error);
    }
  }, [key, value]);

  return [value, setValue];
}
