import { connect } from 'react-redux';
import CustomBtn from '../components/customBtn';
import { currentPageInit } from '../store/action';


const mapStatetoProps = null;

const mapDispatchToProps = (dispatch) => ({
    initCurrentPage: () => {
        dispatch(currentPageInit())
    }
})

export default connect(mapStatetoProps, mapDispatchToProps)(CustomBtn);