import { equalsButton } from '../..';
import compute from '../helpers/compute';
import updateDisplay from '../helpers/updateDisplay';

const equalsButtonListener = (): void => {
    equalsButton.addEventListener('click', (button) => {
        compute();
        updateDisplay();
    });
};

export default equalsButtonListener;
