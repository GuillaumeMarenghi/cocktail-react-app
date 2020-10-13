import React from 'react';
import './style.scss';

const Title = ({content}) => (
    <section id="intro">

    <div id="intro-content" className="center-content">

    <div className="center-content-inner">

      <div className="content-section content-section-margin">

        <div className="content-section-grid clearfix">
        
        <div className="title">

          <div className="bottom"></div>

          <div className="top">

          <div className="label">{content}</div>
            
        		<div className="title-border title-border-left"></div>
        	  <div className="title-border title-border-top"></div>
        	  <div className="title-border title-border-right"></div>
        		<div className="title-border title-border-bottom"></div>

          </div>

        	</div>

        </div>

       </div>

      </div>

     </div>

    </section>
)

export default Title;

