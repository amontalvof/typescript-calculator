import { currentOperandTextElement, previousOperandTextElement } from '../..';
import getDisplayNumber from './getDisplayNumber';
import state from '../state';

const updateDisplay = (): void => {
    currentOperandTextElement.innerText = getDisplayNumber(
        state.currentOperand
    );
    if (state.operation != null) {
        previousOperandTextElement.innerText = `${getDisplayNumber(
            state.previousOperand
        )} ${state.operation}`;
    } else {
        previousOperandTextElement.innerText = '';
    }
};

export default updateDisplay;
