import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer'; // This package will render React components to pure JS objects, without the need of the DOM
import Footer from '../../components/Footer';

describe('<Footer> </Footer>', () => {
    const footer = mount(<Footer />);

    test('Should render Footer component', () =>  {
        expect(footer.length).toEqual(1)
    });

    test('Should render the title', () => {
        expect(footer.find(".Footer-title").text()).toBe('Platzi Store')
    });
});

// Use Snapshots when you want to test code that doesn't change drastically.
// In this use case, the Footer is a component that won't change.
describe('Footer Snapshot', () => {
    test('Check Footer UI', () => {
        const footer = create(<Footer />);
        expect(footer.toJSON()).toMatchSnapshot();
    });
});
