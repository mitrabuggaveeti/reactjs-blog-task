import { IState, ParamTypes } from './Types';

export const editPost = async (details : IState['details']) =>{

  try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${details.id}`, {
        method: 'PUT',
        body: JSON.stringify(details),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      if(response.ok){
        return await response.json()
      }
      return {
        error : 'Not able to update post details'
      }  
  } catch (error) {
     return {error}
  }

}

export  const getPostDetails = async(params : ParamTypes) =>{

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

      if(response.ok){
        return await response.json()
      }
    
      return {
        error : 'Not able to fetch post details'
      }      
    } catch (error) {
      return {error};
    }
}

