import React from 'react';

import StarIcon from '@material-ui/icons/Star'

import { ProductContainer, ProductInfo, Title, Price, Rating, Image, Button } from './productStyles.jsx'
import { useStateValue } from '../../redux/store.js';

const Product = ({ title, imgUrl, price, rating, id }) => {
    // eslint-disable-next-line
    const [{cart},dispatch] = useStateValue()
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                title,
                imgUrl,
                price,
                rating
            }
        })
    }
    return(
        <ProductContainer>
            <ProductInfo>
                <Title>{title}</Title>
                <Price><small>$</small><strong>{price}</strong></Price>
                <Rating>
                    {Array(rating).fill().map((_,i) => <StarIcon style={{color:'#ffe234'}} /> )}
                </Rating>
            </ProductInfo>
            <Image src={imgUrl} alt='book, the lean startup' />
            <Button onClick={addToCart}>Add to Cart</Button>
        </ProductContainer> 

    )
}
    

export default Product;    
    