interface IState {
    currentOperand: string;
    previousOperand: string;
    operation: string | undefined;
}

const state: IState = {
    currentOperand: '',
    previousOperand: '',
    operation: undefined,
};

export default state;
