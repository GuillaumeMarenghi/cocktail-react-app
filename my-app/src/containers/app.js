import { connect } from 'react-redux';
import App from '../components/app/App';
import { getAllCocktail } from '../store/action';


const mapStatetoProps = null;

const mapDispatchToProps = (dispatch) => ({
    getCocktail: () => {
        dispatch(getAllCocktail())
    }
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);