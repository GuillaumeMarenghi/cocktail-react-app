import React from 'react';
import './style.scss';

/* import { Search } from 'semantic-ui-react' */

const SearchBar = ({searchValue, onFormSubmit, onInputChange}) => (
    <div className="search-bar">
       <form
       onSubmit={(e) => {
           e.preventDefault();
           onFormSubmit();
       }}
       >
       <input
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

export default SearchBar;