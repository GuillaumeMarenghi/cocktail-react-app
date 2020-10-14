import React from 'react';
//import './style.scss';
import PropTypes from 'prop-types';

const Pagination = (({nbPages, currentPage, changePage}) => (
    <div className='pagination'>
    { currentPage !== 1 && <button className="pagination-btn"  onClick={() =>  changePage(-1)}>Previous</button>}
    {"  "}<span className='pagination-count'> Page {currentPage} of {nbPages}</span>
    {currentPage !== nbPages && <button className="pagination-btn" onClick={() =>  changePage(1)}>Next</button>}
    </div>
))

Pagination.prototype = {
    nbPages : PropTypes.number.isRequired,
    currentPage : PropTypes.number.isRequired
}

export default Pagination;