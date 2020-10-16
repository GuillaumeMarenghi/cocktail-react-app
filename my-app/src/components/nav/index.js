import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

const Nav = ({activeItem, changeToHome, changeToCat, changeToAlcohol}) => {

    return (
      <div className='nav-container'>
        <Segment inverted >
        <div className='segment-menu'>
        <Menu pointing secondary >
          <Link to='/'>
          <Menu.Item
            name='most popular'
            active={activeItem === ''}
            onClick={changeToHome}
          />
          </Link>
          <Link exact to='/categories'>
          <Menu.Item
            name='sort by category'
            active={activeItem === 'category'}
            onClick={changeToCat}
          />
          </Link>
          <Link exact to='/alcohol'>
          <Menu.Item
            name='sort by alcohol'
            active={activeItem === 'alcohol'}
            onClick={changeToAlcohol}
          />
          </Link>
        </Menu>
        </div>
      </Segment>
      </div>
    )
}

Nav.propTypes = {
  activeItem: PropTypes.string,
  changeToHome: PropTypes.func.isRequired,
  changeToCat: PropTypes.func.isRequired,
  changeToAlcohol: PropTypes.func.isRequired
}

export default Nav;