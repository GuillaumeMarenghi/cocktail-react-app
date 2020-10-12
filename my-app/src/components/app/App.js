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
import ByAlcohol from '../../containers/byAlcohol';
import SearchResult from '../../containers/searchResult';

function App({ getCocktail }) {

  useEffect(() => {
    getCocktail();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/categories" component={MainCat} />
        <Route exact path="/alcohol" component={ByAlcohol}/>
        <Route exact path="/recipe/:slug" component={Recipe} />
        <Route exact path="/searchResult" component={SearchResult} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  getCocktail: PropTypes.func.isRequired
};

export default App;
