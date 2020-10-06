import { connect } from 'react-redux';
import Nav from '../components/nav';
import { changeToHome, changeToCat, changeToAlcohol } from '../store/action';


const mapStatetoProps = (state) => ({
    activeItem: state.activeItem
}    
);

const mapDispatchToProps = (dispatch) => ({
    changeToHome: () => {
        dispatch(changeToHome())
    },
    changeToCat: () => {
        dispatch(changeToCat())
    },
    changeToAlcohol: () => {
        dispatch(changeToAlcohol())
    }
})

export default connect(mapStatetoProps, mapDispatchToProps)(Nav);