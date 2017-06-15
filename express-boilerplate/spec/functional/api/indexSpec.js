import request from 'request-promise';

describe('API: index', () => {
    it('should return version and env', done => {
        request({uri: 'http://localhost:8080/api', json: true})
            .then(res => expect(Object.keys(res)).toEqual(['version', 'env']))
            .finally(done);
    });
});
