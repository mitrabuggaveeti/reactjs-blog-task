import React,{useEffect,useState} from 'react'
import Post from '../Post/Post'
import {getAllPosts} from './feedApi';
import {InewState} from './Types';

const Feed : React.FC = () => {

    const [posts, setPosts] = useState<InewState['post']>({data : [], error : 'Loading'});

    useEffect(() => {
        const getData = async() =>{
            const data = await getAllPosts();
            setPosts(data)
        }

        getData();
    }, [])

    const allPosts = posts.data.slice(0,20).map((post) => <Post post={post} key={post.id} posts={posts} setPosts={setPosts}/>);

    return (
        <div data-testid="feed">
            {!posts.error ? allPosts : <h1>{posts.error}......</h1>}
        </div>
    )
}

export default Feed
