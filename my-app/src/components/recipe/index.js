import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Button, Image, List } from 'semantic-ui-react'


const Recipe = ({backToMain, cocktail}) => { 
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
    <div className="recipe">
        <h2>{cocktail.strDrink}</h2>
        <div className="recipe-center">
        <Image src={cocktail.strDrinkThumb} size='medium' circular />
        <div className="recipe-center-list-container">
        <List bulleted className='recipe-center-list'>
        {ingredients.map( elm => <List.Item>{elm}</List.Item>)}  
        </List>
        </div>
        </div>
        <div className='recipe-instruction'>
            <h3>Instruction</h3>
            <div>{cocktail.strInstructions}</div>
        </div>
        <Button icon='left chevron' content='Back' onClick={backToMain}/>
    </div>
)}

Recipe.propTypes = {
    backToMain: PropTypes.func.isRequired,
    cocktail: PropTypes.object.isRequired
};
export default Recipe;