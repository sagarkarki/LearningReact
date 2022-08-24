import { useState } from "react";
import CreateTodo from "./createTodo";
import TodoList from "./todoList";
import TodoProvider from "./todoProvider";

export type TodoT = {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
};

export default function Todo() {
  const [createdTodo, setCreatedTodo] = useState<TodoT>();
  return (
    <TodoProvider>
      <div className="flex items-center flex-col">
        <CreateTodo
          onTodoCreate={(todo) => {
            setCreatedTodo(todo);
          }}
        />
        <TodoList createdTodo={createdTodo!} />
      </div>
    </TodoProvider>
  );
}
