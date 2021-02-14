import * as actionTypes from "./cart.actionTypes"
import { addItemToCart, quantityChange } from "./cart.utils"

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case actionTypes.TOGGLE_CART_HIDDEN:

            // state.hidden= !state.hidden      never do this error or state won't update
            return {
                ...state,
                hidden: !state.hidden
            }


        case actionTypes.ADD_ITEM:

            //don't update the array rather return new updated array
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }


        case actionTypes.QUANTITY_CHANGE:

            //don't update the array rather return new updated array
            return {
                ...state,
                cartItems: quantityChange(state.cartItems, action.payload.item, action.payload.operation)
            }


        case actionTypes.REMOVE_ITEM:
            
            return {
                ...state,
                cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }


        default:
            return state
    }
}

export default cartReducer