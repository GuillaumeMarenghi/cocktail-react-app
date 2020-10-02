import {
    SEARCH_INPUT_CHANGE,
    SEARCH_SEND
} from '../action';

const initialState = {
    visible: false,
    inputEntry: "",
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SEARCH_SEND:
            return {
                ...state,
                inputEntry:''
            };
        case SEARCH_INPUT_CHANGE:
            return {
                ...state,
                inputEntry: action.payload,
            }
        default:
            return state;
    }
    
}