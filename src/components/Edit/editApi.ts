import { IState } from './Types';

export const editPost = async (details : IState['details']) =>{

  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(details),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    return await response.json();
  } catch (error) {
     return {error}
  }

}

