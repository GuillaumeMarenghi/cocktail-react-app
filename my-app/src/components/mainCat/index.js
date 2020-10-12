import React, { useEffect, useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from "../drinkCard"

const MainCat = ({ getCategories, getCategoryCocktail, viewCocktailDetail, categories, cocktailByCat }) => {
    console.log('cocktailByCat:', cocktailByCat.lenght)
    
    useEffect(() => { 
        getCategories();
    }, []);

    useEffect(() => {
        if (cocktailByCat) {
            setNbPages(Math.round(cocktailByCat.length/12))
            };
    })

    const [nbPages, setNbPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    let currentCocktailByCat = cocktailByCat.slice((currentPage - 1)*12, currentPage*12)
      
    return (
    <div className="main-cat-container">
    <div className="main-cat-btn">
        {categories.map(elm => (
            <CategoryButton key={elm.strCategory} category={elm.strCategory} getCategoryCocktail={getCategoryCocktail}/>
        ))}
    </div>  
    <div className="main-cat-card-container">
        {currentCocktailByCat.map(elm => (
            <div key={elm.idDrink} className="main-cat-card"><DrinkCard cocktail={elm} viewCocktailDetail={viewCocktailDetail}/></div>
        ))}
    </div>
        <div className='pagination'>
            { currentPage !== 1 && <button onClick={() =>  setCurrentPage(currentPage - 1)}>précedent </button>}
            {"  "}
            {currentPage !== nbPages && <button onClick={() =>  setCurrentPage(currentPage + 1)}>suivant {currentPage } </button>}
        </div>
    </div>

)}

export const CategoryButton = ({ category, getCategoryCocktail}) => {

    const urlCategory = category.replace(/ /g,"_");

    return (
        <section id="intro">

  <div id="intro-content" className="center-content">

    <div className="center-content-inner">

      <div className="content-section content-section-margin">

        <div className="content-section-grid clearfix">
        
        <div onClick={() => { getCategoryCocktail(urlCategory) }} className="button nav-link">

          <div className="bottom"></div>

          <div className="top">

          <div className="label">{category}</div>
            
        		<div className="button-border button-border-left"></div>
        	  <div className="button-border button-border-top"></div>
        	  <div className="button-border button-border-right"></div>
        		<div className="button-border button-border-bottom"></div>

          </div>

        	</div>

        </div>

       </div>

      </div>

     </div>

  </section>
/*     <button 
    className="category-btn"
    onClick={() => { getCategoryCocktail(urlCategory) }}
    >
    {category}
    </button> */
)}

MainCat.propTypes = {
    getCategories: PropTypes.func.isRequired,
    getCategoryCocktail: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({strCategory: PropTypes.string})).isRequired,
    viewCocktailDetail: PropTypes.func.isRequired,
    cocktailByCat: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default MainCat;