import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TodoT } from "./todo";
import { useTodoContext } from "./todoProvider";

type Inputs = {
  title: string;
};

type CreateTodoProps = {
  onTodoCreate: (todo: TodoT) => void;
};
export default function CreateTodo(props: CreateTodoProps) {
  const { onTodoCreate } = props;

  const [isLoading, setLoader] = useState(false);
  const { todos } = useTodoContext();
  console.log("Todos : ", todos);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const todoSubmitHandler: SubmitHandler<Inputs> = (data) => {
    const payload: TodoT = { ...data, userId: 1, completed: false };
    setLoader(true);
    axios
      .post("https://jsonplaceholder.typicode.com/todos", payload)
      .then((res) => {
        reset();
        onTodoCreate(res.data);
      })
      .finally(() => setLoader(false));
  };

  return (
    <div className="create-todo container mx-auto">
      <h4>Create Todo</h4>
      <form onSubmit={handleSubmit(todoSubmitHandler)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="todo"
          >
            Todo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("title", { required: true })}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {isLoading ? "Adding Todo..." : "Add Todo"}
        </button>
      </form>
    </div>
  );
}
