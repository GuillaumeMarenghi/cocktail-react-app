import React, { useEffect } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Header from "../header";
import Main from "../main";

function App({ getRandCocktail }) {

  useEffect(() => {
    getRandCocktail();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
