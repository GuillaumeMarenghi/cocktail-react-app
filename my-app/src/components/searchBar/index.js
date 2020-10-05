import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

import { Input } from 'semantic-ui-react'
/* import { Search } from 'semantic-ui-react' */

const SearchBar = ({searchValue, onFormSubmit, onInputChange}) => (
    <div className="search-bar">
       <form
       className="search-bar-form"
       onSubmit={(e) => {
           e.preventDefault();
           onFormSubmit();
       }}
       >
       <Input
       action={{ icon: 'search' }}
       className="search-bar-input"
       type="text"
       className="search-bar-input"
       placeholder="Find a cocktail"
       onChange={(e) => {
           onInputChange(e.target.value)
       }}
       value={ searchValue }
       />
       </form>
    </div>
)

SearchBar.propTypes = {
    searchValue : PropTypes.string.isRequired,
    onFormSubmit : PropTypes.func.isRequired,
    onInputChange : PropTypes.func.isRequired
}

export default SearchBar;