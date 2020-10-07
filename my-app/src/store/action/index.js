export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_SEND = 'SEARCH_SEND';
export const GET_ALL_COCKTAIL = 'GET_ALL_COCKTAIL';
export const GET_ALL_COCKTAIL_SUCCESS = 'GET_ALL_COCKTAIL_SUCCESS';
export const GET_ALL_COCKTAIL_ERROR = 'GET_ALL_COCKTAIL_ERROR';
export const VIEW_COCKTAIL_DETAIL = 'VIEW_COCKTAIL_DETAIL';
export const VIEW_COCKTAIL_DETAIL_SUCCES = 'VIEW_COCKTAIL_DETAIL_SUCCES';
export const VIEW_COCKTAIL_DETAIL_ERROR = 'VIEW_COCKTAIL_DETAIL_ERROR';
export const BACK_TO_MAIN = 'BACK_TO_MAIN';
export const CHANGE_TO_HOME = 'CHANGE_TO_HOME';
export const CHANGE_TO_CAT = 'CHANGE_TO_CAT';
export const CHANGE_TO_ALCOHOL = 'CHANGE_TO_ALCOHOL';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCES = 'GET_CATEGORIES_SUCCES';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';
export const GET_CATEGORY_COCKTAIL = 'GET_CATEGORY_COCKTAIL';
export const GET_CATEGORY_COCKTAIL_SUCCES = 'GET_CATEGORY_COCKTAIL_SUCCES';
export const GET_CATEGORY_COCKTAIL_ERROR = 'GET_CATEGORY_COCKTAIL_ERROR';

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
});

export const changeToHome = () => ({
    type: CHANGE_TO_HOME
});

export const changeToCat = () => ({
    type: CHANGE_TO_CAT
});

export const changeToAlcohol = () => ({
    type: CHANGE_TO_ALCOHOL
});

export const getCategories = () => ({
    type: GET_CATEGORIES
});

export const getCategoriesSucces = (payload) => ({
    type: GET_CATEGORIES_SUCCES,
    payload
});

export const getCategoriesError = (payload) => ({
    type: GET_CATEGORIES_ERROR,
    payload
});

export const getCategoryCocktail = (payload) => ({
    type: GET_CATEGORY_COCKTAIL,
    payload
})

export const getCategoryCocktailSuccess = (payload) => ({
    type: GET_CATEGORY_COCKTAIL_SUCCES,
    payload
})

export const getCategoryCocktailError = (payload) => ({
    type: GET_CATEGORY_COCKTAIL_ERROR,
    payload
})