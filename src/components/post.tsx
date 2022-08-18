import axios from "axios";
import { useEffect, useState } from "react";
import DeletePost from "./deletePost";

type Props = {};
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Post(props: Props) {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {});
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h6>{post.title}</h6>
            <p>{post.body}</p>
            <DeletePost post={post} setPosts={setPosts}></DeletePost>
          </div>
        );
      })}
    </div>
  );
}
