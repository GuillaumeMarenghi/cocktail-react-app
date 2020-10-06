import {
    SEARCH_INPUT_CHANGE,
    SEARCH_SEND,
    GET_ALL_COCKTAIL,
    GET_ALL_COCKTAIL_SUCCESS,
    GET_ALL_COCKTAIL_ERROR,
    VIEW_COCKTAIL_DETAIL,
    VIEW_COCKTAIL_DETAIL_SUCCES,
    VIEW_COCKTAIL_DETAIL_ERROR,
    BACK_TO_MAIN,
    CHANGE_TO_HOME,
    CHANGE_TO_CAT,
    CHANGE_TO_ALCOHOL
} from '../action';

const initialState = {
    visible: false,
    activeItem: 'home',
    inputEntry: "",
    loading: false,
    cocktailDetail: false,
    cocktailDetailId: null,
    error: null,
    randCocktail: [],
    cocktailRecipe: ''
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
        case GET_ALL_COCKTAIL:
            return {
                ...state,
                loading: true
            };
        case GET_ALL_COCKTAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                randCocktail: [
                    action.payload.drinks[21],
                    action.payload.drinks[33],
                    action.payload.drinks[40],
                    action.payload.drinks[41],
                    action.payload.drinks[48],
                    action.payload.drinks[52],
                    action.payload.drinks[70],
                    action.payload.drinks[81],
                    action.payload.drinks[92],
                    action.payload.drinks[93]
                ]
            };
        case GET_ALL_COCKTAIL_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
            case VIEW_COCKTAIL_DETAIL:
                return {
                    ...state,
                    cocktailDetail: true,
                    cocktailDetailId: action.payload
                };
            case VIEW_COCKTAIL_DETAIL_SUCCES:
                return {
                    ...state,
                    cocktailRecipe: action.payload.drinks[0]
                }
            case VIEW_COCKTAIL_DETAIL_ERROR:
                return {
                    ...state,
                    error: action.payload
                }
            case BACK_TO_MAIN:
                return {
                    ...state,
                    cocktailDetail: false
                }
            case CHANGE_TO_HOME:
                return {
                    ...state,
                    activeItem: 'home'
                }
            case CHANGE_TO_CAT:
                return {
                    ...state,
                    activeItem: 'category'
                }
            case CHANGE_TO_ALCOHOL:
                return {
                    ...state,
                    activeItem: 'alcohol'
                }
        default:
            return state;
    }
    
}