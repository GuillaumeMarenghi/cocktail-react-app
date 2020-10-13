import React, {useEffect, useState} from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from "../drinkCard"

const ByAlcohol = ({ getCocktailByAlcohol, viewCocktailDetail, cocktailByAlcohol}) => {
    
    const alcohols = ["Vodka", "Gin","Rum","absinthe", "Whiskey","Bourbon","Wine"/* ,"Beer" */,"Cognac", "Cachaca", "tequila"]
    
    useEffect(() => {
        if (cocktailByAlcohol) {
            setNbPages(Math.round(cocktailByAlcohol.length/12))
            };
    })

    const initCurrentPages = () => setCurrentPage(1);

    const [nbPages, setNbPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    let currentCocktailByAlcohol = cocktailByAlcohol.slice((currentPage - 1)*12, currentPage*12)

    return (
    <div className="main-cat-container">
    <div className="main-cat-btn">
        {alcohols.map(elm => (
            <AlcoholButton key={elm} alcohol={elm} getCocktailByAlcohol={getCocktailByAlcohol} initCurrentPages={initCurrentPages}/>
        ))}
    </div>  
    <div className="main-cat-card-container">
        {cocktailByAlcohol && currentCocktailByAlcohol.map(elm => (
            <div key={elm.idDrink} className="main-cat-card"><DrinkCard cocktail={elm} viewCocktailDetail={viewCocktailDetail}/></div>
        ))}
    </div>
    { nbPages !== 0 &&
        <div className='pagination'>
            { currentPage !== 1 && <button className="pagination-btn"  onClick={() =>  setCurrentPage(currentPage - 1)}>Previous</button>}
            {"  "}<span className='pagination-count'> Page {currentPage} of {nbPages}</span>
    {currentPage !== nbPages && <button className="pagination-btn" onClick={() =>  setCurrentPage(currentPage + 1)}>Next</button>}
        </div>
    }
    </div>

)}

export const AlcoholButton = ({ alcohol, getCocktailByAlcohol, initCurrentPages}) => {

    //const urlCategory = category.replace(/ /g,"_");

    return (
    <section id="intro">

    <div id="intro-content" className="center-content">

    <div className="center-content-inner">

      <div className="content-section content-section-margin">

        <div className="content-section-grid clearfix">
        
        <div onClick={() => { 
            getCocktailByAlcohol(alcohol);
            initCurrentPages(); }} className="button nav-link">

          <div className="bottom"></div>

          <div className="top">

          <div className="label">{alcohol}</div>
            
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
    className="alcohol-btn"
    onClick={() => { getCocktailByAlcohol(alcohol) }}
    >
    {alcohol}
    </button> */
)}

ByAlcohol.propTypes = {
    getCocktailByAlcohol: PropTypes.func.isRequired,
    viewCocktailDetail: PropTypes.func.isRequired,
    cocktailByAlcohol: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ByAlcohol;