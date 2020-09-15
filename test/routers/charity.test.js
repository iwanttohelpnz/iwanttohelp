const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../src/index')
const {describe, it} = require('mocha');
chai.use(chaiHttp)


describe('Charity router tests', () => {
    it('Should return all charities when get without id', function (done) {
        chai.request(server)
            .get('/charity')
            .set('Content-Type', 'application/json')
            .send()
            .then((response) => {
                chai.assert.equal(response.status, 200)
                chai.assert.equal(response.body.length, 2)
                done()
            })
    })

    it('Should return one charity when get has a valid id', function (done) {
        chai.request(server)
            .get('/charity/2')
            .set('Content-Type', 'application/json')
            .send()
            .then((response) => {
                let charity = response.body
                chai.assert.equal(response.status, 200)
                chai.assert.equal(charity.id, 2)
                chai.assert.equal(charity.name, 'Music Futures Incorporated')
                done()
            })
    })

    it('Should return one charity when get has an invalid id', function (done) {
        chai.request(server)
            .get('/charity/123456')
            .set('Content-Type', 'application/json')
            .send()
            .then((response) => {
                chai.assert.equal(response.status, 404)
                done()
            })
    })
})