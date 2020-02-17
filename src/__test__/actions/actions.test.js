import actions from '../../actions';

describe('Actions', () => {
    const payload = {
        'id': '1',
        'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
        'title': 'Camiseta',
        'price': 25,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }

    test('addToCart action', () => {
        const expectedAction = {
            type: "ADD_TO_CART",
            payload
        }

        // Its the same as testing a normal function
        // Dont be scared by the phrase 'test you react actions' ;)
        expect(actions.addToCart(payload)).toEqual(expectedAction)
    });

    test('removeFromCart action', () => {
        const expectedAction = {
            type: "REMOVE_FROM_CART",
            payload
        }

        expect(actions.removeFromCart(payload)).toEqual(expectedAction)
    });
});