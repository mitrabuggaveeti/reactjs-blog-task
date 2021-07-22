import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Comment from '../Comments/Comment';
import {deletePost, getAllComments} from './postsApi';
import styles from './post.module.css';

import { InewState, Iprops } from './Types';

const Post : React.FC<Iprops> = (props) => {

    const {title,body,id, userId} = props.post;
    const {posts,setPosts} = props;
    let history = useHistory();

    const [commentsLabel,setCommentsLabel] = useState(false);
    const [comments,setComments] = useState<InewState['comment']>({error : "Loading",data:[]});
    
   const handleShowComments  = async() =>{
      if(!commentsLabel){
        const data = await getAllComments(id);
        setComments(data);
      }
      setCommentsLabel((prevState) => !prevState);
    }


    const handleDeletePost = async() =>{
        const data =  await deletePost(id); 
        if(!data.error){
            const postsAfterDeletion = posts.data.filter((post) => post.id !== id);
            setPosts({data :postsAfterDeletion,error:''});
        }      
    }

    const handleEditPost = ()=>{
        history.push(`/edit/${id}/${userId}`);
    }

    const commentsError = () => {
       return !comments.error  ? <Comment comments={comments.data}/> : <h2>{comments.error}.....</h2>
    }

    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.title}>
                   <strong> {title} </strong>
                </div>
                <div className={styles.description}>
                   {body}
                </div>
                <div className={styles.btns}>                  
                     <button className={styles.editBtn} onClick={handleEditPost}>Edit</button>
                     <button className={styles.deleteBtn} onClick={handleDeletePost} data-testid='deleteComments'>Delete</button>
                     <button className={styles.commentsBtn} onClick={handleShowComments} data-testid='showComments'>
                      {
                         !commentsLabel ? 'Show Comments' : 'Hide Comments'
                      }
                     </button>
                </div>
                      {
                        commentsLabel ?  commentsError() :''
                      }
            </div>
        </div>
    )
}

export default Post
