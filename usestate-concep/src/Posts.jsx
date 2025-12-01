import { use } from "react";
import Post from "./Post";

export default function Posts({ postFech }) {
  const post = use(postFech);
  console.log(post);
  return (
    <div>
      <h2>All Post :{post.length}</h2> 
      { 
        post.map(post =><Post post={post}></Post>)
      }
    </div>
  );
}
