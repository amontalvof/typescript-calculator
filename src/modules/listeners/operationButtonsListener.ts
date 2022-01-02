import { operationButtons } from '../..';
import chooseOperation from '../helpers/chooseOperation';
import updateDisplay from '../helpers/updateDisplay';

const operationButtonsListener = (): void => {
    operationButtons.forEach((button) => {
        button.addEventListener('click', () => {
            chooseOperation(button.innerText);
            updateDisplay();
        });
    });
};

export default operationButtonsListener;
