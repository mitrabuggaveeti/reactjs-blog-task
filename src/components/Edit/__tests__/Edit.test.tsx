import { cleanup, fireEvent, render,waitFor} from "@testing-library/react";
import Edit from "../Edit";
import * as services from '../editApi';

jest.mock('../editApi');

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      id: '1',
      userId: '2',
    }),
}));

describe('Edit component should', () => {
    afterEach(cleanup);

    it('render',async () => {
                
        const { asFragment } = render(<Edit/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('Make edit api reqquest on submit', async ()=>{

        const mockAddListener = jest.spyOn(services, 'editPost');
        const { getByTestId} = render(<Edit/>);

        fireEvent.click(getByTestId('submit'));
        expect(mockAddListener).toHaveBeenCalled();
    })

})
