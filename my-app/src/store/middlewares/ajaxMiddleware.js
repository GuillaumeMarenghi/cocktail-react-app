import axios from 'axios';
import { 
    GET_ALL_COCKTAIL,
    VIEW_COCKTAIL_DETAIL,
    GET_CATEGORIES,
    GET_CATEGORY_COCKTAIL,
    getAllCocktailSuccess,
    getAllCocktailError,
    viewCocktailDetailSuccess,
    viewCocktailDetailError,
    getCategoriesSucces,
    getCategoriesError,
    getCategoryCocktailSuccess,
    getCategoryCocktailError,

    } from '../action';

const ajaxMiddleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_ALL_COCKTAIL:
            axios({
                method: 'get',
                url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
            }).then(
                (res) => {
                    //console.log('data' ,res.data)
                    store.dispatch(getAllCocktailSuccess(res.data));
                }
            ).catch(
                (err) => {
                    console.log('err' , err);
                    store.dispatch(getAllCocktailError("impossible to retrieve the data"));
                }
            )
            break;
        case VIEW_COCKTAIL_DETAIL:
            axios({
                method:'get',
                url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${store.getState().cocktailDetailId}`
            }).then(
                (res) => {
                    store.dispatch(viewCocktailDetailSuccess(res.data))
                }
            ).catch(
                (err) => {
                    console.log('err' , err);
                    store.dispatch(viewCocktailDetailError("impossible to retrieve the data"));
                }
            )
            break;
        case GET_CATEGORIES:
            axios({
                method: 'get',
                url: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            }).then(
                (res) => {
                    store.dispatch(getCategoriesSucces(res.data))
                }
            ).catch(
                (err) => {
                    console.log(err);
                    store.dispatch(getCategoriesError("impossible to retrieve the data"))
                }
            )
            break;
        case GET_CATEGORY_COCKTAIL:
            axios({
                method: 'get',
                url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${store.getState().cocktailCat}`
            }).then(
                (res) => {
                    store.dispatch(getCategoryCocktailSuccess(res.data))
                    console.log("middl", res.data)
                }
            ).catch(
                (err) => {
                    console.log(err);
                    store.dispatch(getCategoryCocktailError("impossible to retrieve the data"))
                }
            )
            break;
        default:
            return;
    }
};

export default ajaxMiddleware;