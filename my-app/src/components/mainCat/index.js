import React, { useEffect, useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from "../drinkCard";
import CustomBtn from "../customBtn";
import Title from '../title';
import Pagination from '../pagination';
import { useLocation } from 'react-router-dom';

import { Loader} from 'semantic-ui-react';


const MainCat = ({ getCategories, getCategoryCocktail, viewCocktailDetail, categories, cocktailByCat, loading }) => {
    
    let location = useLocation();

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
            <CustomBtn 
            key={elm.strCategory} 
            content={elm.strCategory} 
            action={getCategoryCocktail} 
            initCurrentPages={initCurrentPages} 
            clearBtn={clearBtn}
            url="categories"
            />
        ))}
    </div>
    :
    <div>    
        <Title content={currentCat} />
        <div>
            {loading ? <div><Loader active></Loader></div> : <div> 
            <div className="main-cat-card-container">
                {currentCocktailByCat.map(elm => (
                    <div key={elm.idDrink} className="main-cat-card"><DrinkCard cocktail={elm} viewCocktailDetail={viewCocktailDetail}/></div>
                ))}
            </div>   
            { nbPages !== 0 &&
                <Pagination nbPages={nbPages} currentPage={currentPage} changePage={(value) => {setCurrentPage(currentPage + value)}}/>
            }
            </div>}
        </div>
    
    </div>
    } 
    </div>

)
}

MainCat.propTypes = {
    getCategories: PropTypes.func.isRequired,
    getCategoryCocktail: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({strCategory: PropTypes.string})).isRequired,
    viewCocktailDetail: PropTypes.func.isRequired,
    cocktailByCat: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool
};
export default MainCat;