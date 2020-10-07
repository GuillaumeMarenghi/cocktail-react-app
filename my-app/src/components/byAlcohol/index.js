import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from "../drinkCard"

const ByAlcohol = ({ getCocktailByAlcohol, viewCocktailDetail, cocktailByAlcohol}) => {
    
    const alcohols = ["Vodka", "Gin","Rum","absinthe", "Whiskey","Bourbon","Wine","Beer","Cognac", "Cachaca", "tequila"]
    
    return (
    <div className="main-cat-container">
    <div className="main-cat-btn">
        {alcohols.map(elm => (
            <AlcoholButton key={elm} alcohol={elm} getCocktailByAlcohol={getCocktailByAlcohol}/>
        ))}
    </div>  
    <div className="main-cat-card-container">
        {cocktailByAlcohol && cocktailByAlcohol.map(elm => (
            <div key={elm.idDrink} className="main-cat-card"><DrinkCard cocktail={elm} viewCocktailDetail={viewCocktailDetail}/></div>
        ))}
    </div>
    </div>

)}

export const AlcoholButton = ({ alcohol, getCocktailByAlcohol}) => {

    //const urlCategory = category.replace(/ /g,"_");

    return (
    <button 
    className="alcohol-btn"
    onClick={() => { getCocktailByAlcohol(alcohol) }}
    >
    {alcohol}
    </button>
)}

ByAlcohol.propTypes = {
    getCocktailByAlcohol: PropTypes.func.isRequired,
    viewCocktailDetail: PropTypes.func.isRequired,
    cocktailByAlcohol: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ByAlcohol;