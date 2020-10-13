import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import './style.scss';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

const DrinkCard = ({cocktail, viewCocktailDetail}) => {
    let strUrl = `/recipe/${slugify(cocktail.strDrink)}`;

    return(
    <div className='cocktail-card-container'>
    <Link to={strUrl} >
        <div className="cocktail-card" onClick={() => {viewCocktailDetail(cocktail.idDrink)}}>
            <div className="cocktail-card-img"><Image src={cocktail.strDrinkThumb} size='medium'/></div>
            <div className="cocktail-card-content">
                <span>{cocktail.strDrink}</span>
            </div>
        </div>
    </Link>
    </div>
)}

DrinkCard.propTypes = {
    cocktail: PropTypes.object.isRequired,
    viewCocktailDetail: PropTypes.func.isRequired
}

export default DrinkCard;