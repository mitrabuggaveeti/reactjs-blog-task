import React, { useEffect, useState } from 'react'
import './edit.css';
import {useParams, useHistory} from 'react-router-dom';
import {editPost, getPostDetails} from './editApi';
import {IState, ParamTypes} from './Types';
import * as editConstants from './Constants';


const Edit : React.FC = () => {

    const params = useParams<ParamTypes>();
    let history = useHistory();
    

    const [input, setInput] = useState<IState['details']>({
        ...params,
        title: "",
        body: "",
    }) 

    const [error,setError] = useState('');

    useEffect(() => {
        const getData = async() =>{
            const data = await getPostDetails(params);

            if(!data.error){
                setInput((prevState) =>{
                    return {
                        ...prevState,
                        title : data.title,
                        body : data.body
                    }
                })
            }
            else{
                setError(data.error)
            }

        }
        getData();
    }, [])

 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = async() =>{
        const data = await editPost(input);

        if(!data.error){
            history.push('/feed');
        }
        else{
            setError(data.error)
        }
       
    }

    return (
        <div className="editForm">
            <strong>{editConstants.EDIT_MESSAGE} : {params.userId} & PostID : {params.id}</strong>
            <input 
                type="text"
                onChange={handleChange}
                className="editForm-input"
                name="title"
                value={input.title}
                placeholder={editConstants.INPUT_FIELD_LABEL}
            />
            <textarea
                onChange={handleChange}
                className="editForm-input"
                name="body"
                value={input.body}
                placeholder={editConstants.TEXT_FILED_LABEL}
            />

            <button
                onClick={handleClick}
                className="editForm-btn"
                data-testid='submit'
            >
                {editConstants.SUBMIT_BUTTON_LABEL}
            </button>
            <p>{error}</p>

     </div>
    )
}

export default Edit
