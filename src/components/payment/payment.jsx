import React from 'react';

import { useStateValue } from '../../redux/store'
import { getCartItemCount, getCartTotal } from '../../redux/cartUtils'

import CheckoutItem from '../checkoutitem/checkoutitem'

import { PaymentContainer, Container, DeliveryAddress, Items, PaymentOption, Title } from './paymentStyles.jsx'
import { Link } from 'react-router-dom';
import StripeCheckoutButton from '../stripebutton/stripebutton';

const Payment = () => {
    // eslint-disable-next-line
    const [{cart, user}, dispatch] = useStateValue();
    let cartTotal = getCartTotal(cart)
    let itemsInCart = getCartItemCount(cart)
    return(
        <PaymentContainer>
            <Container>
                <h1>
                    Checkout (<Link to='/checkout'>{itemsInCart} Item{itemsInCart === 1 ? '' : 's'}</Link>)
                </h1>
                <DeliveryAddress>
                    <div style={{flex:'0.2'}}>
                        <Title>Delivery Address</Title>
                    </div>
                    <div style={{flex: '0.8'}}>
                        <p>Email: {user ? user.email : null }</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </DeliveryAddress>
                <Items>
                    <div style={{flex:'0.2'}}>
                        <Title>Review Items and Delivery</Title>
                    </div>
                    <div style={{flex: '0.8'}}>
                        {
                            cart ? cart.map(item => <CheckoutItem item={item} /> ) : null
                        }
                    </div>
                </Items>
                <PaymentOption>
                    <div style={{flex: '0.2'}}>
                        <Title>Payment Method</Title>
                    </div>
                    <div style={{flex: '0.8'}}>
                        <StripeCheckoutButton price={cartTotal} />
                    </div>
                </PaymentOption>

            </Container>
        </PaymentContainer>
    )
}
    

export default Payment;    
    