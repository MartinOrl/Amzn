import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.js';
import { useStateValue } from '../../redux/store.js';

import StarIcon from '@material-ui/icons/Star'
import StarOutline from '@material-ui/icons/StarBorder'

import { OrdersContainer, ItemContainer, Image, ItemInfo, Price, Quantity, Timestamp } from './ordersStyles.jsx'

const OrderItem = ({item}) => {
    const { imgUrl, price, quantity, rating, title, timestamp } = item
    let n = 5-rating
    let stats = [[], []]
    let createdAt = timestamp.toDate()

    for(let i = 0; i < rating; i++){
        stats[0].push(i)
    }
    for(let i = 0; i < n; i++){
        stats[1].push(i)
    }
    return(
        <ItemContainer>
            <Image src={imgUrl} />
            <ItemInfo>
                <h2>{title}</h2>
                {
                    stats[0].map(_ => <StarIcon />)
                }
                {
                    stats[1].map(_ => <StarOutline />)
                }
                <Price>${price}</Price>
            </ItemInfo>
            <div style={{display: 'flex', alignItems:'center'}}>
                <Quantity>Quantity: {quantity}</Quantity>
                <Timestamp>Order Date:     {createdAt.toDateString()}</Timestamp>
                <p>Status: Delivered</p>
            </div>
            


        </ItemContainer>
    )
}



const Orders = () => {
    // eslint-disable-next-line
    const [{user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState();
    useEffect(() => {
        if(user){
            db
            .collection('users')
            .doc(`${user.id}`)
            .get()
            .then(doc => {
                let data = doc.data()
                if(data){
                    setOrders([...data.orders])
                }
            })
        }
    }, [user])
    return(
        <OrdersContainer>
            {
                orders ? orders.map(order => <OrderItem item={order} />) : null
            }
        </OrdersContainer>
    )
}
    

export default Orders;    
    