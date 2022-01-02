import {
    allClearButtonListener,
    deleteButtonListener,
    equalsButtonListener,
    numberButtonsListener,
    operationButtonsListener,
} from './modules/listeners';
import clear from './modules/helpers/clear';
import './styles.css';

export const numberButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll('[data-number]');
export const operationButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll('[data-operation]');
export const equalsButton = document.querySelector(
    '[data-equals]'
) as HTMLElement;
export const deleteButton = document.querySelector(
    '[data-delete]'
) as HTMLElement;
export const allClearButton = document.querySelector(
    '[data-all-clear]'
) as HTMLElement;
export const previousOperandTextElement = document.querySelector(
    '[data-previous-operand]'
) as HTMLElement;
export const currentOperandTextElement = document.querySelector(
    '[data-current-operand]'
) as HTMLElement;

document.addEventListener('DOMContentLoaded', () => {
    clear();
    numberButtonsListener();
    operationButtonsListener();
    equalsButtonListener();
    allClearButtonListener();
    deleteButtonListener();
});
