import axios from "axios";
import { useEffect, useState } from "react";
import { TodoT } from "./todo";
import { useTodoContext } from "./todoProvider";

type TodoProps = {
  createdTodo: TodoT;
};

export default function TodoList(props: TodoProps) {
  const { createdTodo } = props;
  const [todos, setTodos] = useState<TodoT[]>([]);
  const { todos: todoFormContext, addTodoList } = useTodoContext();
  //TODO: READ HOOKS
  //TODO: useState()
  //TODO: useEffect()
  //TODO: useRef()
  //TODO: useMemo()
  //TODO: useCallback()
  //TODO: useContext()

  //TODO: connect status update and delete todos to api

  function toggleTodoStatus(todo: TodoT) {
    setTodos((todos) => {
      return todos.map((el) => {
        if (el.id == todo.id) {
          el.completed = !el.completed;
        }
        return el;
      });
    });
  }

  function removeTodo(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    todo: TodoT
  ) {
    e.stopPropagation();
    setTodos((todos) => {
      return todos.filter((el) => el.id !== todo.id);
    });
  }

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos([...res.data]);
      addTodoList([...res.data]);
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
            onClick={() => toggleTodoStatus(todo)}
          >
            {todo?.title}
            <br />
            {todo.completed ? "Completed" : "Pending"}
            <br />
            <button onClick={(e) => removeTodo(e, todo)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
