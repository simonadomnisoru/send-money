import { expect } from 'chai';
import validate from '../../utils/validation';

describe('The validation is working correctly', () => {
    it('should return errors when the fields are empty or undefined', () => {
        let error = validate({ name: undefined, email: undefined, amount: undefined });
        expect(error).to.deep.equal({ name: true, email: true, amount: true });
        error = validate({ name: '', email: '', amount: '' });
        expect(error).to.deep.equal({ name: true, email: true, amount: true });
    });
    it('should return errors when the amount is not a number', () => {
        const error = validate({ name: 'name', email: 'email', amount: 'notNumber' });
        expect(error).to.deep.equal({ amount: true });
    });
    it('should return errors when the amount is negative', () => {
        const error = validate({ name: 'name', email: 'email', amount: -10 });
        expect(error).to.deep.equal({ amount: true });
    });
    it('should return errors when the amount is higher then the left quantity', () => {
        const error = validate({ name: 'name', email: 'email', amount: 10 }, 5);
        expect(error).to.deep.equal({ amount: true });
    });
    it('should not return errors when the fields correct', () => {
        const error = validate({ name: 'name', email: 'email', amount: 1000 });
        expect(error).to.deep.equal({});
    });
});