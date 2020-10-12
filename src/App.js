import React, { useEffect } from 'react';

import { auth } from './firebase/firebase'

import { Switch, Route } from 'react-router-dom'


import Header from './components/header/header.jsx'
import Home from './components/home/home';
import Checkout from './components/checkout/checkout.jsx';
import SignIn from './components/signin/signin'
import { useStateValue } from './redux/store';

function App() {
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    console.log("Test")
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch({
          type: 'SET_USER',
          user: userAuth
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [user, dispatch])

  return (
    <div>
      <Switch>
        <Route exact path='/' render={Home}>
          <Header />
          <Home />
        </Route>
        <Route exact path='/checkout' render={() => <Checkout />}>
          <Header />
          <Checkout />
        </Route>
        <Route exact path='/signIn' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
