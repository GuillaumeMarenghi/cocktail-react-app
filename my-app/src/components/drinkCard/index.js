import React from 'react';
//import './style.scss';
import PropTypes from 'prop-types';
import { Card , Button, Image} from 'semantic-ui-react';

const DrinkCard = ({cocktail, viewCocktailDetail}) => {
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
            <Button 
            inverted color='purple'
            onClick={() => {
                viewCocktailDetail(cocktail.idDrink)}}
            >
                view recipe details 
            </Button>
        </Card.Content>
    </Card>
    </div>
)}

DrinkCard.propTypes = {
    cocktail: PropTypes.object.isRequired,
    viewCocktailDetail: PropTypes.func.isRequired
}

export default DrinkCard;