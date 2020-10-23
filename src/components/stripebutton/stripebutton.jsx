import React, { useState } from 'react'

import StripeCheckout from 'react-stripe-checkout'

import Loader from 'react-loader-spinner'

import { useHistory } from 'react-router-dom'
import { useStateValue } from '../../redux/store'
import { AddItemsToDatabase } from '../../firebase/firebase'

const StripeButton = ({price, forStripe, onToken, email}) => {
    const publishableKey = 'pk_test_SZgJwqkCt9AZxnpNWOjVZ8fs00Ox0v4xO2'
    return(
        <StripeCheckout 
            label='Pay Now' 
            name='Amazon Clone'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={forStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            style={{margin: '10px 0'}}
            email={email}
            currency='USD'
        />
    )
}

const Spinner = ({status}) => {

    return(
        <div style={{position:'absolute', width:'100%', height:'100vh', background:'rgba(0,0,0,.5)', top:'100px', left:'0'}}>
            <Loader type='Oval' color={status === 'pending' ? '#f0c14b' : '#81b214'} height={100} style={{margin:'200px auto', width:'100px'}}  />
        </div>
    )
}

const StripeCheckoutButton = ({price}) => {
    const [status, setStatus] = useState('default')
    const history = useHistory()
    const priceForStripe = price * 100;
    // eslint-disable-next-line
    const [{user, cart}, dispatch] = useStateValue()
    

    const onToken = async token => {
        setStatus('pending')
        if (user){
            AddItemsToDatabase(user, cart)
            dispatch({
                type: 'CLEAR_CART'
            })
        }
        setStatus('Success')
        history.push('/')
    }

    return(
        <div>
            {
                status === 'default' ? <StripeButton price={price} forStripe={priceForStripe} onToken={onToken} email={user.email} /> : <Spinner status={status} />
            }
        </div>
    )
}

export default StripeCheckoutButton