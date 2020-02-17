import fetchData from '../../utils/fetchData';

describe('Fetch API', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Should fetch to an API', () => {
        fetch.mockResponseOnce(JSON.stringify({data: 'test'}));

        return fetchData('https://google.com')
            .then(res => {
                expect(res.data).toEqual('test')
                expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
            });
    });
});