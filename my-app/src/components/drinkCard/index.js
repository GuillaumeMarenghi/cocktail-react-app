import React from 'react';
//import './style.scss';
import PropTypes from 'prop-types';
import { Card , Button, Image} from 'semantic-ui-react';

const DrinkCard = ({cocktail, viewCocktailDetail}) => {
    return(
    <div>
    <Card className='cocktail-card'>
        <Image src={cocktail.strDrinkThumb} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{cocktail.strDrink}</Card.Header>
        <Card.Meta>
            <span className='date'>{cocktail.strCategory}</span>
        </Card.Meta>
        <Card.Description>
            {cocktail.strIngredient1} <br></br>
            {cocktail.strIngredient2} <br></br>
            {cocktail.strIngredient3} <br></br>
            ...
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button 
            inverted color='purple'
            onClick={viewCocktailDetail}
            >
                view recipe details 
            </Button>
        </Card.Content>
    </Card>
    </div>
)}

DrinkCard.propTypes = {
    cocktail: PropTypes.object.isRequired,
}

export default DrinkCard;