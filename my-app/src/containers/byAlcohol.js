import { connect } from 'react-redux';
import ByAlcohol from '../components/byAlcohol';
import { viewCocktailDetail, getCocktailByAlcohol, currentPageInit } from '../store/action';

const mapStateToProps = (state) => ({
    loading: state.loading,
    cocktailByAlcohol: state.cocktailByAlcohol,
    coktailDetail: state.cocktailDetail,
    currentPage: state.currentPage
});

const mapDispatchToProps = (dispatch) => ({
    getCocktailByAlcohol: (value) => {
        dispatch(getCocktailByAlcohol(value))
    },
    viewCocktailDetail: (value) => {
        dispatch(viewCocktailDetail(value));
    },
    initCurrentPage: () => {
        dispatch(currentPageInit())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ByAlcohol);