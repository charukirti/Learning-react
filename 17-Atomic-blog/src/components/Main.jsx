import { memo } from "react";
import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

const Main = memo (function Main({ posts, onAddPost }) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
})


export default Main