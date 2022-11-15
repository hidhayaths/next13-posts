import { PostType } from "../../shared/type";
import styles from "../../styles/Post.module.css";

type PageProps = {
  post: PostType;
};

const Post = ({ post }: PageProps) => {
  const { title, body, userId, username } = post;
  return (
    <div className={styles.post}>
      <h2 className={styles.post_title}>{title}</h2>
      <p className={styles.post_content}>{body}</p>
      <p className={styles.post_footer}>{username ? username : userId}</p>
    </div>
  );
};

export default Post;
