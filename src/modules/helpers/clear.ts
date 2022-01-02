import state from '../state';

const clear = (): void => {
    state.currentOperand = '';
    state.previousOperand = '';
    state.operation = undefined;
};

export default clear;
