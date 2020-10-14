import React, {useEffect, useState} from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from '../drinkCard';
import CustomBtn from '../customBtn';
import Title from '../title';
import Pagination from '../pagination';
import { useLocation } from 'react-router-dom';

import { Loader } from 'semantic-ui-react';

const ByAlcohol = ({ getCocktailByAlcohol, viewCocktailDetail, cocktailByAlcohol, loading}) => {
    
    const alcohols = ["Vodka", "Gin","Rum","absinthe", "Whiskey","Bourbon","Wine"/* ,"Beer" */,"Cognac", "Cachaca", "tequila"]
    
    let location = useLocation();

    useEffect(() => {
        if (cocktailByAlcohol) {
            setNbPages(Math.round(cocktailByAlcohol.length/12))
            };
    })

    useEffect( () => {
        if (location.pathname === '/alcohol') {
        setResult(false);
        } else {
            setResult(true);
            setCurrentCat(location.pathname.slice(9))
        }        
    }, [location]);

    const clearBtn = (value) => {
        setResult(true);
        setCurrentCat(value)
    }

    const initCurrentPages = () => setCurrentPage(1);

    const [nbPages, setNbPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [result, setResult] = useState(false);
    const [currentCat, setCurrentCat] = useState('');

    let currentCocktailByAlcohol = cocktailByAlcohol.slice((currentPage - 1)*12, currentPage*12)

    return (
    <div className="main-cat-container">
    {!result 
    ?
    <div className="main-cat-btn">
        {alcohols.map(elm => (
            <CustomBtn 
            key={elm} 
            content={elm} 
            url="alcohol"
            action={getCocktailByAlcohol} 
            initCurrentPages={initCurrentPages}
            clearBtn={clearBtn}
            />
        ))}
    </div>  
    :
    <div>
    <Title content={currentCat} />
    {loading ? <div><Loader active></Loader></div> : <div> 
    <div className="main-cat-card-container">
        {currentCocktailByAlcohol.map(elm => (
            <div key={elm.idDrink} className="main-cat-card"><DrinkCard cocktail={elm} viewCocktailDetail={viewCocktailDetail}/></div>
        ))}
    </div>
    { nbPages !== 0 &&
    <Pagination nbPages={nbPages} currentPage={currentPage} changePage={(value) => {setCurrentPage(currentPage + value)}}/>
    }
    </div>}
    </div>
    }
    </div>

)
}

ByAlcohol.propTypes = {
    getCocktailByAlcohol: PropTypes.func.isRequired,
    viewCocktailDetail: PropTypes.func.isRequired,
    cocktailByAlcohol: PropTypes.arrayOf(PropTypes.object).isRequired,
    loaing: PropTypes.bool
};

export default ByAlcohol;