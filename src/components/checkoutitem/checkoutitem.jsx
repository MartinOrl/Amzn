import React from 'react';

import StarIcon from '@material-ui/icons/Star'
import StarOutline from '@material-ui/icons/StarBorder'

import { ItemContainer, ItemInfo, Image, Title, Price, Rating, Button, QuantityOptions, Left, Right } from './checkoutitemStyles.jsx'

const Checkoutitem = ({item, addItem, removeItem}) => {
    const { title, price, rating, imgUrl, quantity } = item;

    let empty = [];
    let filled = [];

    const getRating = () => {
        for(let i = 0; i < rating; i++){
            filled.push(i)
        }
        let diff = 5 - rating
        for (let i = 0; i < diff; i++){
            empty.push(i)
        }
    }
    getRating()
    

    return(
        <ItemContainer>
            <Image src={imgUrl} alt='' />
            <ItemInfo>
                <Title>{title}</Title>
                <Price>${price}</Price>
                <Rating>
                    {
                        filled.map(() => <StarIcon style={{color: '#ffe234'}} />)
                    }
                    {
                        empty.map(() => <StarOutline />)
                    }
                </Rating>
                <QuantityOptions>
                    <p>Quantity: </p>
                    <Left onClick={() => removeItem(item)}  />
                    <p>{quantity}</p>
                    <Right onClick={() => addItem(item)} />
                </QuantityOptions>
                <Button onClick={() => removeItem(item)}>Remove from cart</Button>
            </ItemInfo>
        
        </ItemContainer>
    )
}
    

export default Checkoutitem;    
    