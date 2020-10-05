import React from 'react';
import './style.scss';
import { GiGlassCelebration } from 'react-icons/gi';

import SearchBar from '../../containers/searchBar';
import SearchBy from '../searchBy';

const Header = () => (
    <div className="main-header">
        <h1> <GiGlassCelebration /> Cocktail React App</h1>
        <SearchBar />
        <SearchBy visible={false} text="search by Alcohol"/>
    </div>
)

export default Header;