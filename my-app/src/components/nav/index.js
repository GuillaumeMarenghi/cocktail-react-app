import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Search } from 'semantic-ui-react';
import SearchBar from '../../containers/searchBar';
import PropTypes from 'prop-types';
import './style.scss';


const Nav = ({activeItem, changeToHome, changeToCat, changeToAlcohol}) => {

    return (
      <div className='nav-container'>
        <Segment inverted>
        <div className='segment-menu'>
        <Menu inverted pointing secondary>
          <Link to='/'>
          <Menu.Item
            name='most popular'
            active={activeItem === 'home'}
            onClick={changeToHome}
          />
          </Link>
          <Link to='categories'>
          <Menu.Item
            name='sort by category'
            active={activeItem === 'category'}
            onClick={changeToCat}
          />
          </Link>
          <Link to='alcohol'>
          <Menu.Item
            name='sort by alcohol'
            active={activeItem === 'alcohol'}
            onClick={changeToAlcohol}
          />
          </Link>
        </Menu>
        <div className='segment-menu-input'><SearchBar /></div>
        </div>
      </Segment>
      </div>
    )
}

Nav.propTypes = {
  activeItem: PropTypes.string.isRequired,
  changeToHome: PropTypes.func.isRequired,
  changeToCat: PropTypes.func.isRequired,
  changToAlcohol: PropTypes.func.isRequired
}

export default Nav;