export const fakeData = {
    data : [
        {
            "userId": 1,
            "id": 1,
            "title": "test",
            "body": "test"
        },
        {
            "userId": 2,
            "id": 2,
            "title": "test",
            "body": "test"
        }
    ],
    error : ''
}

export const getAllPosts = async () =>{
   return await new Promise(resolve =>{
       resolve(fakeData)
   })
}

