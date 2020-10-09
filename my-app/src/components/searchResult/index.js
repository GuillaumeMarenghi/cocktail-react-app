import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from '../drinkCard';

const SearchResult = ({ cocktail , viewCocktailDetail}) => { 
        
    return (
    <div className="searchResult-component">
        <div className="searchResult-component-container">
        {cocktail && cocktail.map( cocktail => <div key={cocktail.idDrink} className='searchResult-component-drinkCard' >
        <DrinkCard cocktail={cocktail} viewCocktailDetail={viewCocktailDetail}/>
        </div>)}
        </div>
    </div>
)}

SearchResult.propTypes = {
    loading: PropTypes.bool.isRequired,
    cocktailDetail: PropTypes.bool.isRequired,
    cocktail: PropTypes.array.isRequired,
};
export default SearchResult;