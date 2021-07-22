export const getAllPosts = async () =>{

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await response.json();

        if(response.ok){
            return {
                data,
                error : ''
            }
        }
        else{
            return {
                data : [],
                error : 'Failed in fetching posts'
            };
        }
        
    } catch (error) {
        return {
            data : [],
            error 
        };
    }
}

