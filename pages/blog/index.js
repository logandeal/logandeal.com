import BackLink from "../../components/BackLink";
import { Post } from "../../components/Post";
import { posts } from "../../getAllPosts";

export default function IndexPage() {
  return (
    <>
      <BackLink />
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}
