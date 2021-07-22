import React, { useState } from 'react'
import './edit.css';
import {useParams, useHistory} from 'react-router-dom';
import {editPost} from './editApi';
import {IState, ParamTypes} from './Types';

const Edit : React.FC = () => {

    const params = useParams<ParamTypes>();
    let history = useHistory();
    

    const [input, setInput] = useState<IState['details']>({
        ...params,
        title: "",
        body: "",
    }) 
 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = async() =>{
        const data = await editPost(input);
        history.push('/feed');
    }

    return (
        <div className="editForm">
            <strong>Edit Blog for UserID : {params.userId} & PostID : {params.id}</strong>
            <input 
                type="text"
                onChange={handleChange}
                className="editForm-input"
                name="title"
                value={input.title}
                placeholder="Title"
            />
            <textarea
                onChange={handleChange}
                className="editForm-input"
                name="body"
                value={input.body}
                placeholder="Body"
            />

            <button
                onClick={handleClick}
                className="editForm-btn"
                data-testid='submit'
            >
                Submit
            </button>
     </div>
    )
}

export default Edit
