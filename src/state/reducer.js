import actionTypes from './actions';

const reducerTransactions = (state, action) => {
    switch (action.type) {
        case actionTypes.send:
            const sent = state.sent + action.transaction.amount;
            const left = state.left - action.transaction.amount;
            const transaction = { ...action.transaction, id: state.transactions.length };
            const percentage = (100 * left)/20000;
            return { ...state, transactions: [...state.transactions, transaction], left, sent, percentage };
        default:
            return state;
    }
};
export default reducerTransactions;