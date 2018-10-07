import actionTypes from './actions';
export const sendMoneny = (transaction) => ({ type: actionTypes.send, transaction: transaction });
export default sendMoneny;