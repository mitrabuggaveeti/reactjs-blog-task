export const fakeData = {
   data :[
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est"
      },
      {
        "postId": 1,
        "id": 2,
        "name": "quo vero rei",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil"
      },
      {
        "postId": 1,
        "id": 3,
        "name": "quo vero rei",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil"
      }
    ]
}

export const getAllComments = async (id:number) =>{

    return await new Promise(resolve =>{
        resolve(fakeData)
    })
}

export  const deletePost = async (id:number) =>{
  
    return await new Promise(resolve =>{
      resolve({ ok : true})
    })
}


