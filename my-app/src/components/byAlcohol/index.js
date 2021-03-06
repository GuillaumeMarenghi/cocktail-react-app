import React, {useEffect, useState} from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from '../drinkCard';
import CustomBtn from '../../containers/customBtn';
import Title from '../title';
import Pagination from '../../containers/pagination';
import { useLocation, Redirect } from 'react-router-dom';

import { Loader, Image } from 'semantic-ui-react';

const ByAlcohol = ({ getCocktailByAlcohol, viewCocktailDetail, cocktailByAlcohol, currentPage, loading}) => {
    
    const alcohols = ["Vodka", "Gin","Rum","Absinthe", "Whiskey","Bourbon","Wine"/* ,"Beer" */,"Cognac", "Cachaca", "tequila"];
    
    let location = useLocation();

    const [nbPages, setNbPages] = useState(0);
    const [result, setResult] = useState(false);
    const [currentCat, setCurrentCat] = useState('');
    

    useEffect(() => {
        if (cocktailByAlcohol) {
            setNbPages(Math.round(cocktailByAlcohol.length/12))
            };
    },[cocktailByAlcohol])

    useEffect( () => {
        if (location.pathname === '/alcohol') {
        setResult(false);
        } else {
            setCurrentCat(location.pathname.slice(9,-1).replace(/\//g,""));
            setResult(true);
               
    }}, [location]);

    const clearBtn = (value) => {
        setResult(true);
        setCurrentCat(value)
    }

    let currentCocktailByAlcohol = cocktailByAlcohol.slice((currentPage - 1)*12, currentPage*12)

    return (
    <div className="main-cat-container">
    {!result 
    ?
    <div className="main-cat-content-container">
    <div className="main-cat-content-container-text">select an alcohol and discover all the recipes with this one</div>
    <div className="main-cat-btn">
        {alcohols.map(elm => {
            let imgUrl;
            switch (elm) {
                case "Vodka":
                    imgUrl = 'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg'
                    break;
                case "Gin" :
                    imgUrl = 'https://www.thecocktaildb.com/images/media/drink/qwc5f91512406543.jpg'
                    break;
                case "Rum" :
                    imgUrl = 'https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg'
                    break;
                case "Absinthe" :
                    imgUrl = 'https://www.thecocktaildb.com/images/media/drink/y7s3rh1598719574.jpg'
                    break;
                case "Whiskey" :
                    imgUrl = 'https://www.thecocktaildb.com/images/media/drink/yvvwys1461867858.jpg'
                    break;
                case "Bourbon" :
                    imgUrl = 'https://www.thecocktaildb.com/images/media/drink/sqxsxp1478820236.jpg'
                    break;
                case "Wine" :
                    imgUrl = 'https://www.thecocktaildb.com/images/media/drink/zk74k21593351065.jpg'
                    break;
                case "Cognac" :
                    imgUrl = 'https://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg'
                break;
                case "Cachaca" :
                    imgUrl = 'https://www.thecocktaildb.com/images/media/drink/jgvn7p1582484435.jpg'
                    break;
                case "Tequila" :
                    imgUrl = 'https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg'
                    break;
                default:
                    imgUrl = 'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg'
            }
            return (
            <div className="main-cat-btn-category" key={elm}>
            <div><Image src={imgUrl} size='small' rounded='true'/></div>
            <CustomBtn 
            key={elm} 
            content={elm} 
            url="alcohol"
            action={getCocktailByAlcohol}
            clearBtn={clearBtn}
            />
            </div>
        )})}
    </div>
    </div>
    :
    <div>
    <Title content={currentCat} />
    {loading ? <div><Loader active></Loader></div> : <div> 
    <div className="main-cat-card-container">
        {result &&  currentCocktailByAlcohol.length ?
        currentCocktailByAlcohol.map(elm => (
            <div key={elm.idDrink} className="main-cat-card"><DrinkCard cocktail={elm} viewCocktailDetail={viewCocktailDetail}/></div>
        ))
        :
        <Redirect exact to='/alcohol' />}
    </div>
    { nbPages !== 0 &&
    <Pagination 
    nbPages={nbPages} 
    currentPage={currentPage} 
    />
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
    loading: PropTypes.bool
};

export default ByAlcohol;