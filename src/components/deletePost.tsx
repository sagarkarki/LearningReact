import axios from "axios";
import { useState } from "react";
import { IPost } from "./post";

type Props = {
  post: IPost;
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
};

export default function DeletePost(props: Props) {
  const { post, setPosts } = props;

  const [isDeleting, setDeleting] = useState(false);
  function postDeleteHandler(post: IPost) {
    setDeleting(true);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
      .then(() => {
        setPosts((posts) => posts.filter((el) => el.id !== post.id));
      })
      .finally(() => setDeleting(false));
  }
  return (
    <button
      onClick={() => {
        postDeleteHandler(post);
      }}
    >
      {isDeleting ? "Loading..." : "Delete"}
    </button>
  );
}
