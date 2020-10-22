import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomBtn = ({content, action, initCurrentPage, clearBtn, url}) => {

    const urlContent = content.replace(/ /g,"_");

    return (
    <Link to={`/${url}/${content}/`} >
    <section id="intro">

    <div id="intro-content" className="center-content">

    <div className="center-content-inner">

      <div className="content-section content-section-margin">

        <div className="content-section-grid clearfix">
        
        <div onClick={() => { 
            action(urlContent);
            initCurrentPage();
            clearBtn(content) }} 
            className="button nav-link">

          <div className="bottom"></div>

          <div className="top">

          <div className="label">{content}</div>
            
        		<div className="button-border button-border-left"></div>
        	  <div className="button-border button-border-top"></div>
        	  <div className="button-border button-border-right"></div>
        		<div className="button-border button-border-bottom"></div>

          </div>

        	</div>

        </div>

       </div>

      </div>

     </div>

    </section>
    </Link>
)
}

CustomBtn.propTypes = {
    content: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    initCurrentPages: PropTypes.func.isRequired,
    clearBtn: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
};

export default CustomBtn;