import { connect } from 'react-redux';
import Pagination from '../components/pagination';
import { currentPageUp, currentPageDown } from '../store/action';


const mapStatetoProps = null;

const mapDispatchToProps = (dispatch) => ({
    currentPageUp: () => {
        dispatch(currentPageUp())
    },
    currentPageDown: () => {
        dispatch(currentPageDown())
    }
})

export default connect(mapStatetoProps, mapDispatchToProps)(Pagination);