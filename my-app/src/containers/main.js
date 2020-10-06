import { connect } from 'react-redux';
import Main from '../components/main';
import { viewCocktailDetail } from '../store/action';

const mapStateToProps = (state) => ({
    loading: state.loading,
    cocktailDetail: state.cocktailDetail,
    cocktail: state.randCocktail,
});

const mapDispatchToProps = (dispatch) => ({
    viewCocktailDetail: (value) => {
        dispatch(viewCocktailDetail(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);