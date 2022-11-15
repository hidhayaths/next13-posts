import PostList from "../../components/posts/PostList";
import { getPosts } from "../../shared/api/posts";

const Posts = async () => {
  const posts = await getPosts();

  return (
    <>
      <PostList posts={posts} />
    </>
  );
};

export default Posts;
