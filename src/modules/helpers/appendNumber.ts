import state from '../state';

const appendNumber = (number: string): void => {
    if (number === '.' && state.currentOperand.includes('.')) return;
    state.currentOperand = state.currentOperand.toString() + number.toString();
};

export default appendNumber;
