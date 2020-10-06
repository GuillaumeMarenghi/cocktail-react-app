import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from '../drinkCard';
import Nav from '../../containers/nav';
import Recipe from '../../containers/recipe';

const Main = (props) => { 
    
    return (
    <div className="main-component">
        <Nav activeItem='home'/>
        <div className="main-component-container">
        {!props.cocktailDetail 
        ? 
        props.cocktail.map( cocktail => <div key={cocktail.idDrink} className='main-component-drinkCard' >
        <DrinkCard cocktail={cocktail} viewCocktailDetail={props.viewCocktailDetail}/>
        </div>)
        : <div>
            <Recipe />
        </div>
        }
        </div>
    </div>
)}

Main.propTypes = {
    loading: PropTypes.bool.isRequired,
    cocktailDetail: PropTypes.bool.isRequired,
    cocktail: PropTypes.array.isRequired,
};
export default Main;