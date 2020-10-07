import { connect } from 'react-redux';
import Recipe from '../components/recipe';

const mapStateToProps = (state) => ({
    cocktail: state.cocktailRecipe
});

const mapDispatchToProps = null

;

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);