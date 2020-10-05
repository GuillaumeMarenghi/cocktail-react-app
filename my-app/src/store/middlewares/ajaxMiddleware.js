import axios from 'axios';
import { GET_COCKTAIL_RAND , getCocktailRandSuccess, getCocktailRandError} from '../action';

const ajaxMiddleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_COCKTAIL_RAND:
            axios({
                method: 'get',
                url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
            }).then(
                (res) => {
                    console.log('data' ,res.data)
                    store.dispatch(getCocktailRandSuccess(res.data));
                }
            ).catch(
                (err) => {
                    console.log(err);
                    store.dispatch(getCocktailRandError("impossible to retrieve the data"));
                }
            )
            break;
        default:
            return;
    }
};

export default ajaxMiddleware;