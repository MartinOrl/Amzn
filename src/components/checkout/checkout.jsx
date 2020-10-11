import React from 'react';
import Subtotal from '../subtotal/subtotal.jsx';

import CheckoutItem from '../checkoutitem/checkoutitem'

import { CheckoutContainer, CheckoutItemsContainer, CheckoutTitle, Ad } from './checkoutStyles.jsx'
import { useStateValue } from '../../redux/store.js';

function Checkout() {
    const [{cart, user}, dispatch] = useStateValue()
    const addItem = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            item
        })
    }
    const removeItem = (item) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            item
        })
    }

    return(
        <CheckoutContainer>
            <CheckoutItemsContainer>
                <Ad src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' />
                <div>
                    <h3>Hello, {user ? user.name : 'Guest'}</h3>
                    <CheckoutTitle>Your shopping Cart</CheckoutTitle>
                </div>
                <div>
                    {
                        cart.length ? cart.map(item => 
                            <CheckoutItem item={item} addItem={addItem} removeItem={removeItem} />
                        ) : null
                    }
                </div>
            </CheckoutItemsContainer>
            <div style={{marginLeft: '16px', marginTop:'32px'}}>
                <Subtotal />
            </div>
        </CheckoutContainer>
    )
}
    

export default Checkout;    
    