import { cleanup, render,waitFor} from "@testing-library/react";
import Comment from "../Comment";
 
export const MOCK_DATA = {
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
       }
     ]
 }

describe('Comment component should', () => {
    afterEach(cleanup);

    it('Render',async () => {
                
        const { getByTestId, asFragment } = render(<Comment comments={MOCK_DATA.data}/>);
        const listNode = await waitFor(() => getByTestId('allComments'));

        expect(asFragment()).toMatchSnapshot();
        expect(listNode).toBeTruthy();
    });
})
