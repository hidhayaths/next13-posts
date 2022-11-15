import { getPost } from '../../../shared/api/posts'


type PageProps = {
    params:{
        postId:number
    }
}



const Post = async({params:{postId}}:PageProps) => {
    const post = await getPost(postId)
        
    return (
        <div>
        post : {post.title}
        </div>
    )
}

export default Post