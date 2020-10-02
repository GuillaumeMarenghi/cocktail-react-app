import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SearchBy = ({ visible, text }) => {

    return (
        <div className="searchBy">
            { visible 
            ? <div> true </div>
            : <div className="searchBy-btn" onClick={() => console.log('click')}><p className="searchBy-btn-text">{text}</p> </div>
        }
        </div>
    )
}

SearchBy.propTypes = {
    visible : PropTypes.bool.isRequired,
    text : PropTypes.string.isRequired
}

export default SearchBy;