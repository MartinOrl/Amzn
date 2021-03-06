import { AddItemToCart, RemoveItemFromCart } from './cartUtils'

export const initialState = {
    cart: [],
    user: null
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: AddItemToCart(state.cart, action.item)
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cart: RemoveItemFromCart(state.cart, action.item)
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default: 
            return state
    }
}

export default reducer