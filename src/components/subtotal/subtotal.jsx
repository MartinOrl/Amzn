import React from 'react';

import CurrencyForamt from 'react-currency-format'

import { SubtotalContainer, SubtotalGift, Button } from './subtotalStyles.jsx'

import { getCartItemCount, getCartTotal } from '../../redux/cartUtils'
import { useStateValue } from '../../redux/store.js';

const Subtotal = () => {
    // eslint-disable-next-line
    const [{cart}, dispatch] = useStateValue()
    let count = getCartItemCount(cart)
    let total = getCartTotal(cart)
    return(
        <SubtotalContainer>
            <CurrencyForamt 
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal {count} item{count === 0 || count>1 ? 's' : ''}:
                            <strong style={{marginLeft: '8px'}}>{value}</strong>
                        </p>
                        <SubtotalGift>
                            <input type='checkbox' /> This order contains a gift
                        </SubtotalGift>
                    </div>
                )}
                decimalScale={2}
                value={total}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}

            
            
            
            />
            <Button>Proceed to Checkout</Button>
        </SubtotalContainer>
    )
}
    

export default Subtotal;    
    