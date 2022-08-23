import { useState } from "react";
import CreateTodo from "./createTodo";
import TodoList from "./todoList";

export type TodoT = {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
};

export default function Todo() {
  const [createdTodo, setCreatedTodo] = useState<TodoT>();
  return (
    <div className="flex items-center flex-col">
      <CreateTodo
        onTodoCreate={(todo) => {
          setCreatedTodo(todo);
        }}
      />
      <TodoList createdTodo={createdTodo!} />
    </div>
  );
}
