import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../__mocks__/providerMock';
import Header from '../../components/Header';

describe('<Header></Header>', () => {
    test('Header should be mounted', () => {
        // Shallow solo renderiza el componente como una unidad, es decir sus componentes hijos no serán renderizados
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.length).toEqual(1);
    });

    test('Should render header title', () => {
        // Mount renderizaraá el componente entero, con todos sus hijos
        const header = mount(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );

        expect(header.find(".Header-title").text()).toEqual("Platzi Store");
    });
});

describe('Header Snapshot', () => {
    test('Should check Header UI', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );

        expect(header.toJSON()).toMatchSnapshot()
    });
})