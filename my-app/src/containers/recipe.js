import { connect } from 'react-redux';
import Recipe from '../components/recipe';
import { backToMain } from '../store/action';

const mapStateToProps = (state) => ({
    cocktail: state.cocktailRecipe
});

const mapDispatchToProps = (dispatch) => ({
    backToMain: () => {
        dispatch(backToMain());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);