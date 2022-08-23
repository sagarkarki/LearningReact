import axios from "axios";
import { useEffect, useState } from "react";
import { TodoT } from "./todo";

type TodoProps = {
  createdTodo: TodoT;
};

export default function TodoList(props: TodoProps) {
  const { createdTodo } = props;
  const [todos, setTodos] = useState<TodoT[]>([]);

  //TODO: READ HOOKS
  //TODO: useState()
  //TODO: useEffect()
  //TODO: useRef()
  //TODO: useMemo()
  //TODO: useCallback()
  //TODO: useContext()

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos([...res.data]);
    });
  }, []);

  useEffect(() => {
    if (createdTodo)
      setTodos((todos) => {
        return [createdTodo, ...todos];
      });
  }, [createdTodo]);

  return (
    <ul className="mt-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
          >
            {todo?.title}
          </li>
        );
      })}
    </ul>
  );
}
