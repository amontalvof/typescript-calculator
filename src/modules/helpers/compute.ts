import state from '../state';

const compute = (): void => {
    let computation: number | undefined;
    const prev = parseFloat(state.previousOperand);
    const current = parseFloat(state.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (state.operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        default:
            return;
    }
    state.currentOperand = computation.toString();
    state.operation = undefined;
    state.previousOperand = '';
};

export default compute;
