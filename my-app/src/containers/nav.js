import { connect } from 'react-redux';
import Nav from '../components/nav';
import { getAllCocktail } from '../store/action';


const mapStatetoProps = (state) => ({
    activeItem: state.activeItem
}    
);

const mapDispatchToProps = null

export default connect(mapStatetoProps, mapDispatchToProps)(Nav);