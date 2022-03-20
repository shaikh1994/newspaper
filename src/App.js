import React from 'react';
import Header from './component/Header/Header'
import Othernews from './component/Othernews/Othernews'
import Topnews from './component/Topnews/Topnews'

import useStyles from './styles';

import { data } from './data/data'

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <div className={classes.topnews}>
        <Topnews data = {data} /> 
        <Othernews data = {data} />
      </div>
    </div>
  );
}

export default App;
