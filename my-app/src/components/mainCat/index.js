import React, { useEffect, useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from "../drinkCard";
import Title from '../title';
import { Link, useLocation } from 'react-router-dom';


const MainCat = ({ getCategories, getCategoryCocktail, viewCocktailDetail, categories, cocktailByCat }) => {
    
    let location = useLocation();
    console.log('location:', location)

    useEffect(() => { 
        getCategories();
    }, []);

    useEffect( () => {
        if (location.pathname === '/categories') {
        setResult(false);
        } else {
            setResult(true);
            setCurrentCat(location.pathname.slice(12))
        }
        
    }, [location]);

    useEffect(() => {
        if (cocktailByCat) {
            setNbPages(Math.round(cocktailByCat.length/12))
            };
    })

    const [nbPages, setNbPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [result, setResult] = useState(false);
    const [currentCat, setCurrentCat] = useState('');

    let currentCocktailByCat = cocktailByCat.slice((currentPage - 1)*12, currentPage*12);

    const initCurrentPages = () => setCurrentPage(1);

    const clearBtn = (value) => {
        setResult(true);
        setCurrentCat(value)
    }
      
    return (
    <div className="main-cat-container">
    {!result 
    ?
    <div className="main-cat-btn">
        {categories.map(elm => (
            <CategoryButton 
            key={elm.strCategory} 
            category={elm.strCategory} 
            getCategoryCocktail={getCategoryCocktail} 
            initCurrentPages={initCurrentPages} 
            clearBtn={clearBtn}/>
        ))}
    </div>
    :
    <div>    
        <Title content={currentCat} />
    <div className="main-cat-card-container">
        {currentCocktailByCat.map(elm => (
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
    } 
    </div>

)
}

export const CategoryButton = ({ category, getCategoryCocktail, initCurrentPages, clearBtn}) => {

    const urlCategory = category.replace(/ /g,"_");

    return (
    <Link to={`/categories/${urlCategory}`} >
    <section id="intro">

    <div id="intro-content" className="center-content">

    <div className="center-content-inner">

      <div className="content-section content-section-margin">

        <div className="content-section-grid clearfix">
        
        <div onClick={() => { 
            getCategoryCocktail(urlCategory);
            initCurrentPages();
            clearBtn(category) }} 
            className="button nav-link">

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
    </Link>
)}

MainCat.propTypes = {
    getCategories: PropTypes.func.isRequired,
    getCategoryCocktail: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({strCategory: PropTypes.string})).isRequired,
    viewCocktailDetail: PropTypes.func.isRequired,
    cocktailByCat: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default MainCat;