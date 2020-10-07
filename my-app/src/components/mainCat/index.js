import React, { useEffect } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from "../drinkCard"

const MainCat = ({ getCategories, getCategoryCocktail, viewCocktailDetail, categories, cocktailByCat, cocktailDetail }) => {
    
    useEffect(() => { 
        getCategories();
    }, []);
      
    return (
    <div className="main-cat-container">
    <div className="main-cat-btn">
        {categories.map(elm => (
            <CategoryButton key={elm.strCategory} category={elm.strCategory} getCategoryCocktail={getCategoryCocktail}/>
        ))}
    </div>  
    <div className="main-cat-card-container">
        {cocktailByCat.map(elm => (
            <div key={elm.idDrink} className="main-cat-card"><DrinkCard cocktail={elm} viewCocktailDetail={viewCocktailDetail}/></div>
        ))}
    </div>
    </div>

)}

export const CategoryButton = ({ category, getCategoryCocktail}) => {

    const urlCategory = category.replace(/ /g,"_");

    return (
    <button 
    className="category-btn"
    onClick={() => { getCategoryCocktail(urlCategory) }}
    >
    {category}
    </button>
)}

MainCat.propTypes = {
    getCategories: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({strCategory: PropTypes.string})).isRequired
};
export default MainCat;