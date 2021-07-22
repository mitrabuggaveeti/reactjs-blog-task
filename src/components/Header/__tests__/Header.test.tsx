import { cleanup, render } from "@testing-library/react";
import Header from "../Header";
import renderer from 'react-test-renderer';


describe('Header component',() =>{
    afterEach(cleanup);

    it('should render', () =>{
        const { getByTestId} = render(<Header />);
        const header = getByTestId('header');
        expect(header).toBeTruthy();
    })

    it('should match snapshat', () => {
        const component = renderer.create(<Header />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})