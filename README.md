# Todo React Avançado

Aplicação de lista de tarefas desenvolvida com React e Vite.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- Context API (`createContext` e `useContext`)
- Hooks (`useState`, `useEffect`, `useMemo`)
- Hook personalizado (`useLocalStorage`)
- CSS responsivo com abordagem Mobile First
- `localStorage` para persistência no navegador

## Funcionalidades

- Adicionar tarefas
- Marcar tarefas como concluídas ou pendentes
- Remover tarefas
- Filtrar todas, pendentes e concluídas
- Salvar automaticamente as tarefas no navegador
- Exibir contadores de tarefas

## Como executar localmente

1. Instale o Node.js (versão LTS) em https://nodejs.org/
2. Abra a pasta do projeto no VS Code.
3. Abra o terminal integrado em **Terminal > Novo Terminal**.
4. Instale as dependências:

   ```bash
   npm install
   ```

5. Inicie o servidor:

   ```bash
   npm run dev
   ```

6. Abra no navegador o endereço exibido no terminal, normalmente `http://localhost:5173`.

## Gerar a versão de produção

```bash
npm run build
```

Os arquivos otimizados serão criados na pasta `dist`.

## Estrutura do projeto

```text
src/
├── components/
│   ├── TodoFilters.jsx
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── context/
│   └── TodoContext.jsx
├── hooks/
│   └── useLocalStorage.js
├── App.jsx
├── App.css
└── main.jsx
```

## Conceitos aplicados

- O `TodoProvider` mantém o estado global das tarefas com `useState`.
- O `useTodo` acessa o contexto por meio de `useContext`.
- O hook `useLocalStorage` reutiliza a lógica de leitura e gravação no armazenamento local.
- `useMemo` calcula a lista filtrada e os contadores apenas quando as dependências mudam.
- `React.memo` evita renderizações de `TodoItem` quando suas propriedades não mudam.
