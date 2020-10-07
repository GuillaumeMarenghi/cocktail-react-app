import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
//import './style.scss';
import PropTypes from 'prop-types';
import { Card , Button, Image} from 'semantic-ui-react';

const DrinkCard = ({cocktail, viewCocktailDetail}) => {
    let strUrl = `/recipe/${slugify(cocktail.strDrink)}`;

    return(
    <div>
    <Card className='cocktail-card' >
        <Image src={cocktail.strDrinkThumb} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{cocktail.strDrink}</Card.Header>
        <Card.Meta>
            <span className='date'>{cocktail.strCategory}</span>
        </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Link to={strUrl} >
            <Button 
            inverted color='purple'
            onClick={() => {
                viewCocktailDetail(cocktail.idDrink)}}
            >
                view recipe details 
            </Button>
            </Link>
        </Card.Content>
    </Card>
    </div>
)}

DrinkCard.propTypes = {
    cocktail: PropTypes.object.isRequired,
    viewCocktailDetail: PropTypes.func.isRequired
}

export default DrinkCard;