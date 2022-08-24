import React, { createContext, useContext, useState } from "react";
import { TodoT } from "./todo";

type TodoContextT = {
  todos: TodoT[];
  addTodo: (todo?: TodoT) => void;
  addTodoList: (todos: TodoT[]) => void;
};

const TodoContext = createContext<TodoContextT>({
  todos: [],
  addTodo: () => {},
  addTodoList: () => {},
});

export const useTodoContext = () => useContext(TodoContext);

export default function TodoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<TodoT[]>([]);

  function addTodo(todo?: TodoT) {
    console.log(todo, "Add todo function");
  }

  function addTodoList(todos: TodoT[]) {
    setTodos([...todos]);
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, addTodoList: (todos) => addTodoList(todos) }}
    >
      {children}
    </TodoContext.Provider>
  );
}
