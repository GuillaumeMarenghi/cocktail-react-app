import React, { useEffect } from 'react';
import '../../styles/style.scss';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation} from 'react-router-dom';

import Header from "../header";
import Main from "../../containers/main";
import MainCat from "../../containers/mainCat"
import Recipe from '../../containers/recipe';
import ByAlcohol from '../../containers/byAlcohol';
import SearchResult from '../../containers/searchResult';
import Footer from '../footer';
import NotFound from '../notFound';

function App({ getCocktail }) {

  const location = useLocation();

  useEffect(() => {
    getCocktail();
  }, [getCocktail]);


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="App">
      <Header />
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/categories" component={MainCat} />
        <Route path="/alcohol" component={ByAlcohol}/>
        <Route exact path="/recipe/:slug" component={Recipe} />
        <Route exact path="/searchResult" component={SearchResult} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

App.propTypes = {
  getCocktail: PropTypes.func.isRequired
};

export default App;
