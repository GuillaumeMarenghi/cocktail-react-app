import React, { useEffect } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';

import Header from "../header";
import Main from "../../containers/main";

function App({ getCocktail }) {

  useEffect(() => {
    getCocktail();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

App.propTypes = {
  getCocktail: PropTypes.func.isRequired
};

export default App;
