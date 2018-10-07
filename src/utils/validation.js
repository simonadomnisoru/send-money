const validation = (transaction, left) => {
    let errors = {};
    if (transaction.name === undefined || transaction.name === '') {
        errors = { ...errors, name: true };
    }
    if (transaction.email === undefined || transaction.email === '') {
        errors = { ...errors, email: true };
    }
    if (transaction.amount === undefined || transaction.amount === '' ||
        transaction.amount <= 0 || left < transaction.amount ||
        isNaN(transaction.amount)) {
        errors = { ...errors, amount: true };
    }
    return errors;
};

export default validation;