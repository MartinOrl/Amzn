import React from 'react';

import StarIcon from '@material-ui/icons/Star'

import { ProductContainer, ProductInfo, Title, Price, Rating, Image, Button } from './productStyles.jsx'

const Product = () => {
    return(
        <ProductContainer>
            <ProductInfo>
                <Title>The lean startup</Title>
                <Price><small>$</small><strong>19.99</strong></Price>
                <Rating>
                </Rating>
            </ProductInfo>
            <Image src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.__AC_SY400_.jpg' alt='book, the lean startup' />
            <Button>Add to Cart</Button>
        </ProductContainer> 

    )
}
    

export default Product;    
    