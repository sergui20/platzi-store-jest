import reducers from '../../reducers';

describe('Reducers', () => {
    test('Should return initial state', () => {
        const initalState = {}
        const action = {
            type: '',
            payload: ''
        }
        expect(reducers(initalState, action)).toEqual({})
    });

    test('Should return state with product added to the list', () => {
        const state = {test: 'test', cart: []}
        const action = {
            type: 'ADD_TO_CART',
            payload: {
                'id': '1',
                'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
                'title': 'Camiseta',
                'price': 25,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            }
        }
        const expectedState = {
            test: 'test',
            cart: [{'id': '1','image': 'https://arepa.s3.amazonaws.com/camiseta.png','title': 'Camiseta','price': 25,'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}]
        }
        expect(reducers(state, action)).toEqual(expectedState)
    });

    test('Should return state with a product removed from the list', () => {
        const state = {test: 'test', cart: [{'id': '1','image': 'https://arepa.s3.amazonaws.com/camiseta.png','title': 'Camiseta','price': 25,'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}]}
        const action = {
            type: 'REMOVE_FROM_CART',
            payload: {
                'id': '1',
                'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
                'title': 'Camiseta',
                'price': 25,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            }
        }
        const expectedState = {test: 'test', cart: []}
        expect(reducers(state, action)).toEqual(expectedState);
    });
});