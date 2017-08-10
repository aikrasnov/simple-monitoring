const {expect} = require('chai');
const {getStatus} = require('../helper');

describe('getStatus', () => {
    it('should return smth', () => {
        expect(getStatus()).to.be.ok;
    });
});
