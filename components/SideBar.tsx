import styles from '../styles/SideBar.module.css'
import Link from 'next/link'
import { getUsers } from '../shared/api/posts'




const SideBar = async() => {
    const users = await getUsers()
    return (
        <aside className={styles.sider}>
        <Link href="posts" className={styles.post_link}>All Posts</Link>
        {
            users.map(user=>
                (<Link key= {user.id} href={`posts/users/${user.id}`} className={styles.post_link}>{user.name}</Link>)    
            )
        }
        </aside>
    )
}

export default SideBar