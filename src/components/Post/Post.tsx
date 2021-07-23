import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Comment from '../Comments/Comment';
import {deletePost, getAllComments} from './postsApi';
import styles from './post.module.css';
import * as postConstants from './Constants';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { InewState, Iprops } from './Types';

const Post : React.FC<Iprops> = (props) => {

    const {title,body,id, userId} = props.post;
    const {posts,setPosts} = props;
    let history = useHistory();

    const [commentsLabel,setCommentsLabel] = useState(false);
    const [comments,setComments] = useState<InewState['comment']>({
      error : postConstants.DATA_LOAD_LABEL,data:[]
    });
    
   const handleShowComments  = async() =>{
      if(!commentsLabel){
        const data = await getAllComments(id);
        setComments(data);
      }
      setCommentsLabel((prevState) => !prevState);
    }


    const handleDeleteConfirmaton = async () =>{
       const data =  await deletePost(id); 
        if(!data.error){
            const postsAfterDeletion = posts.data.filter((post) => post.id !== id);
            setPosts({data :postsAfterDeletion,error:''});
        } 
    }

    const handleDeletePost = async() =>{

        confirmAlert({
            title: postConstants.DELETE_POPUP_TITLE,
            message: `${postConstants.DELETE_POPUP_MESSAGE} ${id}`,
            buttons: [
              {
                label: postConstants.CONFIRM_DELETE,
                onClick: () => handleDeleteConfirmaton()
              },
              {
                label: postConstants.CANCEL_DELETE,
                onClick: () => {}
              }
            ]
          });   
    }

    const handleEditPost = ()=>{
        history.push(`/edit/${id}/${userId}`);
    }

    const commentsError = () => {
       return !comments.error  ? <Comment comments={comments.data.slice(0,10)}/> : <h2>{comments.error}.....</h2>
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
                     <button className={styles.editBtn} onClick={handleEditPost}>{postConstants.LABEL_EDIT}</button>
                     <button className={styles.deleteBtn} onClick={handleDeletePost} data-testid='deleteComments'>{postConstants.LABEL_DELETE}</button>
                     <button className={styles.commentsBtn} onClick={handleShowComments} data-testid='showComments'>
                      {
                         !commentsLabel ? postConstants.COMMENTS_LABEL_SHOW : postConstants.COMMENTS_LABEL_HIDE
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
