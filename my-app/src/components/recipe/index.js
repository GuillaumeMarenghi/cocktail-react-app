import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import Title from '../title';
import { Image, List } from 'semantic-ui-react';


const Recipe = ({cocktail}) => { 
    let APIingredient = [
        cocktail.strIngredient1,
        cocktail.strIngredient2,
        cocktail.strIngredient3,
        cocktail.strIngredient4,
        cocktail.strIngredient5,
        cocktail.strIngredient6,
        cocktail.strIngredient7,
        cocktail.strIngredient8,
        cocktail.strIngredient9,
        cocktail.strIngredient10,
    ];
    const ingredientsSanitize = APIingredient.filter(elm => elm !== "");
    const ingredients = ingredientsSanitize.filter( elm => elm !== null);
    
    return (
    <div className="recipe-container">
        {!cocktail ?
        <Title content="Recipe Not Found" />
        : 
        <div>
        <Title content={`Recipe of ${cocktail.strDrink}`} />
        <div className="recipe">
            <div className="recipe-center">
            <Image src={cocktail.strDrinkThumb} size='medium' circular />
            <div className="recipe-center-list-container">
            <List bulleted className='recipe-center-list'>
            {ingredients.map( elm => <List.Item key={elm}>{elm}</List.Item>)}  
            </List>
            </div>
            </div>
            <div className='recipe-instruction'>
                <h3>Instructions</h3>
            {cocktail.strInstructions ? <div>{cocktail.strInstructions}</div> : <div>mix the ingredients</div>}    
            </div>
        </div>
        </div>
        }
    </div>
)}

Recipe.propTypes = {
    cocktail: PropTypes.object.isRequired
};
export default Recipe;