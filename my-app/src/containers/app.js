import { connect } from 'react-redux';
import App from '../components/app/App';
import { getCocktailRand } from '../store/action';


const mapStatetoProps = null;

const mapDispatchToProps = (dispatch) => ({
    getRandCocktail: () => {
        dispatch(getCocktailRand())
    }
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);