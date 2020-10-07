import { connect } from 'react-redux';
import Recipe from '../components/recipe';
import { backToMain } from '../store/action';

const mapStateToProps = (state) => ({
    cocktail: state.cocktailRecipe
});

const mapDispatchToProps = null

;

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);