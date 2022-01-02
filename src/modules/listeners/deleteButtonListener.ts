import { deleteButton } from '../..';
import deleteAction from '../helpers/delete';
import updateDisplay from '../helpers/updateDisplay';

const deleteButtonListener = (): void => {
    deleteButton.addEventListener('click', (button) => {
        deleteAction();
        updateDisplay();
    });
};

export default deleteButtonListener;
