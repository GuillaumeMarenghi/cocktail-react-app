import React from 'react';
import './style.scss';
import SearchBar from '../../containers/searchBar';
import NavBar from '../../containers/nav';
import { GiGlassCelebration } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="main-header">
        <div className="main-header-group-1">
            <Link exact to="/" ><h1> <GiGlassCelebration /> Cocktail React App</h1></Link>
            <div className='main-header-input'><SearchBar /></div>
        </div>
        <div className="main-header-group-2">
            <div className="main-headear-nav"><NavBar /></div>
        </div>
    </div>
)

export default Header;