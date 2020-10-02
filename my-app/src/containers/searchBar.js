import { connect } from 'react-redux';
import SearchBar from '../components/searchBar';
import { searchInputChange, searchSend} from '../store/action';

const mapStateToProps = (state) => ({
    searchValue: state.inputEntry
});

const mapDispatchToProps = (dispatch) => ({
    onInputChange:(value) => {
        dispatch(searchInputChange(value))
    },
    onFormSubmit:() => {
        dispatch(searchSend());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);