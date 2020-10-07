import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from '../drinkCard';

const Main = (props) => { 
    
    return (
    <div className="main-component">
        <div className="main-component-container">
        {props.cocktail.map( cocktail => <div key={cocktail.idDrink} className='main-component-drinkCard' >
        <DrinkCard cocktail={cocktail} viewCocktailDetail={props.viewCocktailDetail}/>
        </div>)}
        </div>
    </div>
)}

Main.propTypes = {
    loading: PropTypes.bool.isRequired,
    cocktailDetail: PropTypes.bool.isRequired,
    cocktail: PropTypes.array.isRequired,
};
export default Main;