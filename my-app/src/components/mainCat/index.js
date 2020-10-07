import React, { useEffect } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const MainCat = ({ getCategories, getCategoryCocktail, categories, cocktailByCat }) => {
    console.log("cocktailByCat", cocktailByCat)
    useEffect(() => { 
        getCategories();
    }, []);
      
    return (
    <div className="main-cat-container">
        {categories.map(elm => (
            <CategoryButton key={elm.strCategory} category={elm.strCategory} getCategoryCocktail={getCategoryCocktail}/>
        ))}
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