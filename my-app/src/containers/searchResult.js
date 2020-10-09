import { connect } from 'react-redux';
import SearchResult from '../components/searchResult';
import { viewCocktailDetail } from '../store/action';
import { SearchResults } from 'semantic-ui-react';

const mapStateToProps = (state) => ({
    loading: state.loading,
    cocktailDetail: state.cocktailDetail,
    cocktail: state.cocktailBySearch,
});

const mapDispatchToProps = (dispatch) => ({
    viewCocktailDetail: (value) => {
        dispatch(viewCocktailDetail(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);