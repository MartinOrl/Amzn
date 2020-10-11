import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Checkout from './components/checkout/checkout.jsx';

import Header from './components/header/header.jsx'
import Home from './components/home/home';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={Home} />
        <Route exact path='/checkout' render={() => <Checkout />} />
      </Switch>
    </div>
  );
}

export default App;
