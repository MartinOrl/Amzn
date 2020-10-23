import React, { useEffect } from 'react';

import { auth } from './firebase/firebase'

import { Switch, Route } from 'react-router-dom'


import Header from './components/header/header.jsx'
import Home from './components/home/home';
import Checkout from './components/checkout/checkout.jsx';
import SignIn from './components/signin/signin'
import Payment from './components/payment/payment';
import Orders from './components/orders/orders'

import { createUserProfileDocument } from './firebase/firebase';
import { useStateValue } from './redux/store';

function App() {
  // eslint-disable-next-line
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    console.log("Test")
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          dispatch({
            type: 'SET_USER',
            user: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      dispatch({
        type: 'SET_USER',
        user: userAuth
      })
    })
  // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route exact path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/payment' >
          <Header />
          <Payment />
        </Route>
        <Route exact path='/myOrders'>
          <Header />
          <Orders />
        </Route>
      </Switch>
    </div>
  )
}

export default App;

