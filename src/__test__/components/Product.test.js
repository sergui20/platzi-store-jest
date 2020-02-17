import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../__mocks__/providerMock';
import Product from '../../components/Product';

const data = {
    'id': '1',
    'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
    'title': 'Camiseta',
    'price': 25,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
}

describe('<Product></Product>', () => {
    test('Should render a product', () => {
        const product = shallow(
            <ProviderMock>
                <Product product={data} handleAddToCart={() => {}} />
            </ProviderMock>
        );
        expect(product.length).toEqual(1);
    });

    test('Should add producto to cart when clicked', () => {
        const handleAddToCart = jest.fn();
        const product = mount(
            <ProviderMock>
                <Product product={data} handleAddToCart={handleAddToCart} />
            </ProviderMock>
        );

        product.find('button').simulate('click');
        expect(handleAddToCart).toBeCalledTimes(1)
    });
});
