import React from 'react'
import PostList from '../../../../components/posts/PostList'
import { getUserPosts } from '../../../../shared/api/posts'

type PageProps = {
    params : {
        userId : number
    }
}

const UserPosts = async({params:{userId}}:PageProps) => {

    const userPosts = await getUserPosts(userId)

    return (
        <div>
            <PostList posts={userPosts} />
        </div>
    )
}

export default UserPosts