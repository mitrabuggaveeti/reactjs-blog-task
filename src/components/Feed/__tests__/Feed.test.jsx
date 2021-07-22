import { cleanup, render,waitFor} from "@testing-library/react";
import Feed from "../Feed";


jest.mock('../feedApi');

describe('Feed component should', () => {
    afterEach(cleanup);

    it('Should have two blogs rendered',async () => {
                
        const { getByTestId, asFragment } = render(<Feed />);

        const listNode = await waitFor(() => getByTestId('feed'));
        expect(listNode.children).toHaveLength(2);
        expect(asFragment()).toMatchSnapshot();
    });

})
