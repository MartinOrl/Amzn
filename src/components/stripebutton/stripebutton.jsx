import React, { useState } from 'react'

import StripeCheckout from 'react-stripe-checkout'

import Loader from 'react-loader-spinner'

import { useHistory } from 'react-router-dom'
import { useStateValue } from '../../redux/store'

const StripeButton = ({price, forStripe, onToken}) => {
    const publishableKey = 'pk_test_SZgJwqkCt9AZxnpNWOjVZ8fs00Ox0v4xO2'
    return(
        <StripeCheckout 
            label='Pay Now' 
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={forStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            style={{margin: '10px 0'}}
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
    const [{user}, dispatch] = useStateValue()
    

    const onToken = async token => {
        setStatus('pending')
        if (user){

        }
        setStatus('Success')
        history.push('/')
    }

    return(
        <div>
            {
                status === 'default' ? <StripeButton price={price} forStripe={priceForStripe} onToken={onToken} /> : <Spinner status={status} />
            }
        </div>
    )
}

export default StripeCheckoutButton