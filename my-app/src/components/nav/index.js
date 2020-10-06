import React, { Component } from 'react';
import { Menu, Segment, Search } from 'semantic-ui-react';
import SearchBar from '../../containers/searchBar';
import PropTypes from 'prop-types';
import './style.scss';


const Nav = ({activeItem, changeToHome, changeToCat, changToAlcohol}) => {

    return (
        <Segment inverted>
        <div className='segment-menu'>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='most popular'
            active={activeItem === 'home'}
            onClick={() => {console.log('click 1')}}
          />
          <Menu.Item
            name='sort by category'
            active={activeItem === 'category'}
            onClick={() => {console.log('click 2')}}
          />
          <Menu.Item
            name='sort by alcohol'
            active={activeItem === 'alcohol'}
            onClick={() => {console.log('click 3')}}
          />
        </Menu>
        <div className='segment-menu-input'><SearchBar /></div>
        </div>
      </Segment>
    )
}

Nav.PropTypes = {
  activeItem: PropTypes.string.isRequired,
}

export default Nav;