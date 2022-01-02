import compute from './compute';
import state from '../state';

const chooseOperation = (operation: string): void => {
    if (state.currentOperand === '') return;
    if (state.previousOperand !== '') {
        compute();
    }
    state.operation = operation;
    state.previousOperand = state.currentOperand;
    state.currentOperand = '';
};

export default chooseOperation;
