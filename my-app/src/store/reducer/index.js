import {
    SEARCH_INPUT_CHANGE,
    SEARCH_SEND,
    GET_COCKTAIL_RAND,
    GET_COCKTAIL_RAND_SUCCESS,
    GET_COCKTAIL_RAND_ERROR
} from '../action';

const initialState = {
    visible: false,
    inputEntry: "",
    loading: false,
    error: null,
    randCocktail: null
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
            };
        case GET_COCKTAIL_RAND:
            return {
                ...state,
                loading: true
            };
        case GET_COCKTAIL_RAND_SUCCESS:
            return {
                ...state,
                loading: false,
                randCocktail: action.payload
            };
        case GET_COCKTAIL_RAND_ERROR:
                return {
                    ...state,
                    loading: false,
                    randCocktail: action.payload
                }
        default:
            return state;
    }
    
}