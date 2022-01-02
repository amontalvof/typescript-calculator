import state from '../state';

const deleteAction = (): void => {
    state.currentOperand = state.currentOperand.toString().slice(0, -1);
};

export default deleteAction;
