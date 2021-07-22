import { cleanup, fireEvent, render,waitFor} from "@testing-library/react";
import Post from "../Post";
import * as services from '../postsApi';


jest.mock('../postsApi');

const MOCK_DATA = {
    post : 
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit"
      },
    posts :{
        data :[
            {
                "userId": 2,
                "id": 2,
                "title": "optio reprehenderit",
                "body": "quia et suscipit"
            },
            {
                "userId": 3,
                "id": 3,
                "title": "sunt aut facere ",
                "body": "est autem sunt rem"
            }
        ],
        error : ''
    }
    
}

describe('Post component', () => {
    afterEach(cleanup);

    it('Should have comments rendered on button click',async () => {
                
        const { getByTestId, asFragment } = render(<Post post={MOCK_DATA.post} posts={MOCK_DATA.posts} setPosts={()=>{}}/>);

        fireEvent.click(getByTestId('showComments'));

        const listNode = await waitFor(() => getByTestId('allComments'));

        expect(listNode.children).toHaveLength(3);
        expect(asFragment()).toMatchSnapshot();
    });

    it('Should change comments button label', async ()=>{
        const { getByTestId} = render(<Post post={MOCK_DATA.post} posts={MOCK_DATA.posts} setPosts={()=>{}}/>);

        expect(getByTestId('showComments')).toHaveTextContent('Show Comments');
        fireEvent.click(getByTestId('showComments'));

        const commentsBtn = await waitFor(() => getByTestId('showComments'));
        expect(commentsBtn.innerHTML).toEqual('Hide Comments');

    })


    it('Should delete blog with id:1', async ()=>{

        const mockAddListener = jest.spyOn(services, 'deletePost');

        const { getByTestId} = render(<Post post={MOCK_DATA.post} posts={MOCK_DATA.posts} setPosts={()=>{}}/>);

        fireEvent.click(getByTestId('deleteComments'));

        expect(mockAddListener).toHaveBeenCalledWith(1);
    })

})
