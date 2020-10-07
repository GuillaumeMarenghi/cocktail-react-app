import { connect } from 'react-redux';
import MainCat from '../components/mainCat';
import { getCategories, getCategoryCocktail } from '../store/action';

const mapStateToProps = (state) => ({
    loading: state.loading,
    categories: state.categories,
    cocktailByCat: state.cocktailByCat
    
});

const mapDispatchToProps = (dispatch) => ({
    getCategories: () => {
        dispatch(getCategories());
    },
    getCategoryCocktail: (value) => {
        dispatch(getCategoryCocktail(value))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainCat);