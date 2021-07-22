import React from 'react'
import { InewState as Props} from '../Post/Types';

interface Iprops {
    comments : Props['comment']['data']
}    

const Comment : React.FC<Iprops> = (props) => {

    const renderAllComments : JSX.Element[] =  props.comments.map((comment) =>{
        return (
          <li key={comment.id}>
              {comment.body}
              <p> - {comment.email}</p>
         </li>
        )
    });

    return (
        <div>
            <h2>Comments</h2>
            <ul data-testid='allComments'>
                {
                    renderAllComments
                }
            </ul>
        </div>
    )
}

export default Comment
