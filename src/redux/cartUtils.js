export const AddItemToCart = (cart, itemToAdd) => {
    const existingCartItem = cart.find(item => item.id === itemToAdd.id)
    if(existingCartItem){
        return cart.map(item => 
            item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item     )
    }
    return [...cart, {...itemToAdd, quantity: 1}]
}

export const RemoveItemFromCart = (cart, itemToRemove) => {
    const existingCartItem = cart.find(item => item.id === itemToRemove.id)
    if(existingCartItem.quantity === 1){
        return cart.filter( item => item.id !== itemToRemove.id)
    }
    return cart.map(item =>
        item.id === itemToRemove.id ? {...item, quantity: item.quantity - 1} : item)
}

export const getCartItemCount = (cart) => {
    var count = 0;
    cart.map(item => {
        count += item.quantity
        return ''
    })
    return count
}

export const getCartTotal = cart => {
    var total = 0;
    cart.map(item => {
        total += item.quantity*item.price
        return ''
    })
    return total
}