import React, {useEffect} from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Pagination = (({nbPages, currentPage, currentPageUp, currentPageDown}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

return (
    <div className='pagination'>
    { currentPage !== 1 && <button className="pagination-btn"  onClick={() => currentPageDown()}>Previous</button>}
    {"  "}<span className='pagination-count'> Page {currentPage} of {nbPages}</span>
    {currentPage !== nbPages && <button className="pagination-btn" onClick={() => currentPageUp()}>Next</button>}
    </div>
)})

Pagination.prototype = {
    nbPages : PropTypes.number.isRequired,
    currentPage : PropTypes.number.isRequired
}

export default Pagination;