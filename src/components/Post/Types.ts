import { InewState as Props } from '../Feed/Types';

export interface Iprops {
    post : {
        userId: number
        id: number
        title: string
        body: string
    },
    posts : Props['post'],
    setPosts : React.Dispatch<React.SetStateAction<Props['post']>>
}

export interface InewState {
    comment : {
        data : {
            postId : number,
            id : number,
            email : string,
            body : string
        }[],
        error : string
    }
}