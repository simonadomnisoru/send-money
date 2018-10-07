import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer, {
    transactions: [],
    left: 20000,
    sent: 0,
    percentage: 100
});

export default store;