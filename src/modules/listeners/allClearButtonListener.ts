import { allClearButton } from '../..';
import clear from '../helpers/clear';
import updateDisplay from '../helpers/updateDisplay';

const allClearButtonListener = (): void => {
    allClearButton.addEventListener('click', (button) => {
        clear();
        updateDisplay();
    });
};

export default allClearButtonListener;
