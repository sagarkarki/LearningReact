import axios from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  body: string;
};

export default function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newData = { ...data, userId: 1 };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newData)
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Enter Title"
        required
        {...register("title", { required: true })}
      />
      <p>{errors.title?.type === "required" && "Title is required"}</p>
      <textarea rows={5} {...register("body")}></textarea>
      <button type="submit">Save Post</button>
    </form>
  );
}
