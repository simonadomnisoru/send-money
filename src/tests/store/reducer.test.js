import { expect } from 'chai';
import reducer from '../../state/reducer';
import actionTypes from '../../state/actions';
const storeInitialState = {
    transactions: [],
    left: 20000,
    sent: 0,
    percentage: 100
};

const newTransaction = {
    id: 0,
    name: 'John',
    email: 'John@gmail.com',
    amount: 1000
};

describe('reducer handles the actions correctly', () => {
    it('should reduce the transactions corectly', () => {
        const nextState = reducer(
            storeInitialState,
            {
                type: actionTypes.send,
                transaction: newTransaction
            }
        );
        expect(nextState.left).to.equal(19000);
        expect(nextState.sent).to.equal(1000);
        expect(nextState.percentage).to.equal(95);
        expect(nextState.transactions).to.deep.equal([newTransaction]);
    });
});