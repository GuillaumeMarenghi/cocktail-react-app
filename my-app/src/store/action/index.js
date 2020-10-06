export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_SEND = 'SEARCH_SEND';
export const GET_ALL_COCKTAIL = 'GET_ALL_COCKTAIL';
export const GET_ALL_COCKTAIL_SUCCESS = 'GET_ALL_COCKTAIL_SUCCESS';
export const GET_ALL_COCKTAIL_ERROR = 'GET_ALL_COCKTAIL_ERROR';
export const VIEW_COCKTAIL_DETAIL = 'VIEW_COCKTAIL_DETAIL';
export const VIEW_COCKTAIL_DETAIL_SUCCES = 'VIEW_COCKTAIL_DETAIL_SUCCES';
export const VIEW_COCKTAIL_DETAIL_ERROR = 'VIEW_COCKTAIL_DETAIL_ERROR';
export const BACK_TO_MAIN = 'BACK_TO_MAIN';

export const searchInputChange = (payload) => ({
    type: SEARCH_INPUT_CHANGE,
    payload
});

export const searchSend = () => ({
    type: SEARCH_SEND,
});

export const getAllCocktail = () => ({
    type: GET_ALL_COCKTAIL,
});

export const getAllCocktailSuccess = (payload) => ({
    type: GET_ALL_COCKTAIL_SUCCESS,
    payload
});
  

export const getAllCocktailError = (payload) => ({
    type: GET_ALL_COCKTAIL_ERROR,
    payload
});

export const viewCocktailDetail = (payload) => ({
    type: VIEW_COCKTAIL_DETAIL,
    payload
});

export const viewCocktailDetailSuccess = (payload) => ({
    type: VIEW_COCKTAIL_DETAIL_SUCCES,
    payload
});

export const viewCocktailDetailError = (payload) => ({
    type: VIEW_COCKTAIL_DETAIL_ERROR,
    payload
});

export const backToMain = () => ({
    type: BACK_TO_MAIN
})