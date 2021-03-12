const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../test-server');
const {describe, it} = require('mocha');
chai.use(chaiHttp);

describe('Search router tests', () => {
    it('Should return all charities when get /search/charities', function (done) {
        chai.request(server)
            .get('/search/charities')
            .set('Content-Type', 'application/json')
            .send()
            .then((response) => {
                chai.assert.equal(response.status, 200);
                chai.assert.equal(response.body.length, 20);
                done();
            });
    });

    it('Should return one charity when get /search/charities/:id has a valid id', function (done) {
        chai.request(server)
            .get('/search/charities/2')
            .set('Content-Type', 'application/json')
            .send()
            .then((response) => {
                let charity = response.body;
                chai.assert.equal(response.status, 200);
                chai.assert.equal(charity.id, 2);
                chai.assert.equal(charity.name, 'Music Futures Incorporated');
                done();
            });
    });

    it('Should return 404 when get /search/charities/:id has an invalid id', function (done) {
        chai.request(server)
            .get('/search/charities/123456')
            .set('Content-Type', 'application/json')
            .send()
            .then((response) => {
                chai.assert.equal(response.status, 404);
                done();
            });
    });
});