import React, { useEffect } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Header from "../header";
import Main from "../../containers/main";
import MainCat from "../../containers/mainCat"
import Nav from '../../containers/nav';
import Recipe from '../../containers/recipe';

function App({ getCocktail }) {

  useEffect(() => {
    getCocktail();
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/categories" component={MainCat} />
        <Route exact path="/recipe/:slug" component={Recipe} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  getCocktail: PropTypes.func.isRequired
};

export default App;
