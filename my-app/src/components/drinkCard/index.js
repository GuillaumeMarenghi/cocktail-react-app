import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import './style.scss';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

const DrinkCard = ({cocktail, viewCocktailDetail}) => {
    let strUrl = `/recipe/${slugify(cocktail.strDrink)}`;
    let cocktailName = cocktail.strDrink.length > 27 ? `${cocktail.strDrink.slice(0,22)}...` : cocktail.strDrink ;

    return(
    <div className='cocktail-card-container'>
    <Link to={strUrl} >

        <div className="custom-card-container">
        <div className="card" onClick={() => {viewCocktailDetail(cocktail.idDrink)}}>
            <div className="card__image-container">
                <div className="card_image"><Image src={cocktail.strDrinkThumb} size='medium'/></div>
            </div>
      
            <svg className="card__svg" viewBox="0 0 800 500">
                <path d="M 0 370 Q 50 370 100 370 Q 250 370 350 370 C 400 370 550 370 650 370 Q 675 370 700 370 Q 790 370 800 500 L 800 600 L 0 600" stroke="transparent" fill="#6caca1"/>
                <path className="card__line" d="M 0 370 Q 50 370 100 370 Q 250 370 350 370 C 400 370 550 370 650 370 Q 675 370 700 370 Q 790 370 800 500" stroke="pink" stroke-width="12" fill="transparent"/>
                <path className="card__line_2" d="M 0 360 Q 50 360 100 360 Q 250 360 350 360 C 400 360 550 360 650 360 Q 675 360 700 360 Q 790 360 800 490" stroke="pink" stroke-width="12" fill="transparent"/>
                <path className="card__line_3" d="M 0 350 Q 50 350 100 350 Q 250 350 350 350 C 400 350 550 350 650 350 Q 675 350 700 350 Q 790 350 800 490" stroke="pink" stroke-width="12" fill="transparent"/>
            </svg>
    
            <div className="card__content">
            <h3 className="card__title">{cocktailName}</h3>
            </div>
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