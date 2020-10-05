export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_SEND = 'SEARCH_SEND';
export const GET_COCKTAIL_RAND = 'GET_COCKTAIL_RAND';
export const GET_COCKTAIL_RAND_SUCCESS = 'GET_COCKTAIL_RAND_SUCCESS';
export const GET_COCKTAIL_RAND_ERROR = 'GET_COCKTAIL_RAND_ERROR';
export const VIEW_COCKTAIL_DETAIL = 'VIEW_COCKTAIL_DETAIL';

export const searchInputChange = (payload) => ({
    type: SEARCH_INPUT_CHANGE,
    payload
});

export const searchSend = () => ({
    type: SEARCH_SEND,
});

export const getCocktailRand = () => ({
    type: GET_COCKTAIL_RAND,
});

export const getCocktailRandSuccess = (payload) => ({
    type: GET_COCKTAIL_RAND_SUCCESS,
    payload
});
  

export const getCocktailRandError = (payload) => ({
    type: GET_COCKTAIL_RAND_ERROR,
    payload
});

export const viewCocktailDetail = () => ({
    type: VIEW_COCKTAIL_DETAIL
});