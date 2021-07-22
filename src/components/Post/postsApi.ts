export const getAllComments = async (id:number) =>{

    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const data = await response.json();

        if(response.ok){
            return {
                data,
                error :''
            }
        }
        return {
                data : [],
                error :'Failed in fetching the comments'
        }
    }
    catch(error){
        return {
            data : [],
            error
        }
    }
}

export  const deletePost = async (id:number) =>{

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
         });

         if(response.ok){
             return {
                 status : 'deleted',
                 error : ''
             }
         }
         else return {
             status : 'pending',
             error : 'failed'
         }
    
        
    } catch (error) {
        return {
            error,
            status: 'failed'
        }
    }
}


