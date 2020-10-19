import React from 'react';
import './style.scss';
import { Icon } from 'semantic-ui-react';

const Footer = () => (
    <div className="footer">
        <div className="footer-link-social-network">
        <a href='https://www.linkedin.com/in/guillaume-marenghi/' target='_blank' rel="noopener noreferrer"><Icon link name='linkedin' size='big' /></a>
        <a href='https://www.facebook.com/guillaume.marenghi?ref=bookmarks' target='_blank' rel="noopener noreferrer"><Icon link name='facebook official' size='big' /></a>
        <a href='https://github.com/GuillaumeMarenghi?tab=repositories' target='_blank' rel="noopener noreferrer"><Icon link name='github' size='big' /></a>
        </div>
        <div className="footer-credit">Data collected via the API  <a href="https://www.thecocktaildb.com/" target="_blank" rel="noopener noreferrer">https://www.thecocktaildb.com/</a></div>
    </div>
)

export default Footer;