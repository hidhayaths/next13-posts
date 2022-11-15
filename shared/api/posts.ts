import axios from 'axios'
import { PostType, UserType } from '../type'

const baseUrl = "https://jsonplaceholder.typicode.com"

const getUsers = async()=>{
    const usersResponse = await axios.get<UserType[]>(baseUrl+"/users")
    return usersResponse.data
}

const getUser= async(userId:number) => {
    const userResponse = await axios.get<UserType>(baseUrl+"/users/"+userId)
    return userResponse.data
}



const getUserPosts = async(userId:number) =>{
    const userPostsResponse = await axios.get<PostType[]>(baseUrl+"/posts?userId="+userId)
    return userPostsResponse.data
}

const getPosts = async() =>{
    const postsResponse = await axios.get<PostType[]>(baseUrl + "/posts")
    return postsResponse.data;

}

const getPost = async(postId:number) => {
    const postResponse = await axios.get<PostType>(baseUrl+"/posts/"+postId)
    return postResponse.data
}

export {getPosts,getPost,getUsers,getUser,getUserPosts}