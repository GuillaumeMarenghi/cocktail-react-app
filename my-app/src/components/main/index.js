import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DrinkCard from '../drinkCard';
//import { Card , Button, Image} from 'semantic-ui-react'

const Main = (props) => { 
    
    return (
    <div className="main-component">
        <h2>Cocktail of the day</h2>
        {!props.cocktailDetail 
        ? <div className='main-component-randCard' >
        <DrinkCard cocktail={props.cocktail} viewCocktailDetail={props.viewCocktailDetail}/>
        </div>
        : <div> recipe detail </div>
    }
        
    </div>
)}

Main.propTypes = {
    loading: PropTypes.bool.isRequired,
    cocktailDetail: PropTypes.bool.isRequired,
    cocktail: PropTypes.object.isRequired,
};
export default Main;