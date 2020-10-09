export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_SEND = 'SEARCH_SEND';
export const SEARCH_SEND_SUCCESS = 'SEARCH_SEND_SUCCESS';
export const SEARCH_SEND_ERROR = 'SEARCH_SEND_ERROR';
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
export const GET_COCKTAIL_BY_ALCOHOL = 'GET_COCKTAIL_BY_ALCOHOL';
export const GET_COCKTAIL_BY_ALCOHOL_SUCCESS = 'GET_COCKTAIL_BY_ALCOHOL_SUCCESS';
export const GET_COCKTAIL_BY_ALCOHOL_ERROR = 'GET_COCKTAIL_BY_ALCOHOL_ERROR';

export const searchInputChange = (payload) => ({
    type: SEARCH_INPUT_CHANGE,
    payload
});

export const searchSend = () => ({
    type: SEARCH_SEND,
});

export const searchSendSucces = (payload) => ({
    type: SEARCH_SEND_SUCCESS,
    payload
});

export const searchSendError = (payload) => ({
    type: SEARCH_SEND_ERROR,
    payload
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

export const getCocktailByAlcohol = (payload) => ({
    type: GET_COCKTAIL_BY_ALCOHOL,
    payload
})

export const getCocktailByAlcoholSuccess = (payload) => ({
    type: GET_COCKTAIL_BY_ALCOHOL_SUCCESS,
    payload
})

export const getCocktailByAlcoholError = (payload) => ({
    type: GET_COCKTAIL_BY_ALCOHOL_ERROR,
    payload
})