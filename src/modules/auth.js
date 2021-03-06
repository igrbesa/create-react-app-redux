const SET_OPEN_DIALOG = 'LOGIN/SET_OPEN_DIALOG';
const SET_OPEN_REGISTER_DIALOG = 'REGISTER/SET_OPEN_REGISTER_DIALOG';

const loginInitialState = {}
export default (state = loginInitialState, action) => {
    switch (action.type) {
        case SET_OPEN_DIALOG:
            return {
                ...state,
                isLoginDialogOpened: action.payload
            }
        case SET_OPEN_REGISTER_DIALOG:
            return {...state, isRegisterDialogOpened: action.payload}
        default:
            return state
    }
}

/**
 *  Actions 
 */

export const setLoginDialogOpened = (value) => {
    return { type: SET_OPEN_DIALOG, payload: value };
}

export const setRegisterDialogOpened = (value) => {
    return { type: SET_OPEN_REGISTER_DIALOG, payload: value};
}