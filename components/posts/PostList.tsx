import { PostType } from "../../shared/type"
import Post from "./Post"
import styles from '../../styles/Post.module.css'

type PageProps = {
    posts : PostType[]
}

const PostList = ({posts}:PageProps) => {
  return (
    <div className={styles.post_list}>
        {
            posts.map(post=>(<Post key={post.id} post={post} />))
        }

    </div>
  )
}

export default PostList