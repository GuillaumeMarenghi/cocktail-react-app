import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Pagination = (({nbPages, currentPage, changePage}) => {

return (
    <div className='pagination'>
    { currentPage !== 1 && <Link to={`${currentPage-1}`}><button className="pagination-btn"  onClick={() =>  changePage(-1)}>Previous</button></Link>}
    {"  "}<span className='pagination-count'> Page {currentPage} of {nbPages}</span>
    {currentPage !== nbPages && <Link to={`${currentPage+1}`}><button className="pagination-btn" onClick={() =>  changePage(1)}>Next</button></Link>}
    </div>
)})

Pagination.prototype = {
    nbPages : PropTypes.number.isRequired,
    currentPage : PropTypes.number.isRequired
}

export default Pagination;