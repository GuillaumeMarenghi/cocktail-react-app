import { connect } from 'react-redux';
import ByAlcohol from '../components/byAlcohol';
import { viewCocktailDetail, getCocktailByAlcohol } from '../store/action';

const mapStateToProps = (state) => ({
    loading: state.loading,
    cocktailByAlcohol: state.cocktailByAlcohol,
    coktailDetail: state.cocktailDetail 
});

const mapDispatchToProps = (dispatch) => ({
    getCocktailByAlcohol: (value) => {
        dispatch(getCocktailByAlcohol(value))
    },
    viewCocktailDetail: (value) => {
        dispatch(viewCocktailDetail(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ByAlcohol);