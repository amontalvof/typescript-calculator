import { numberButtons } from '../..';
import appendNumber from '../helpers/appendNumber';
import updateDisplay from '../helpers/updateDisplay';

const numberButtonsListener = (): void => {
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            appendNumber(button.innerText);
            updateDisplay();
        });
    });
};

export default numberButtonsListener;
