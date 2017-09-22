const SET_OPEN_DIALOG = 'LOGIN/SET_OPEN_DIALOG';

const loginInitialState = {}
export default (state = loginInitialState, action) => {
    switch (action.type) {
        case SET_OPEN_DIALOG:
            return {
                ...state,
                isLoginDialogOpened: action.payload
            }
        default:
            return state
    }
}

export const setLoginDialogOpened = (value) => {
    return { type: SET_OPEN_DIALOG, payload: value };
}