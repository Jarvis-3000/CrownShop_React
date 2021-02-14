import * as actionTypes from "./cart.actionTypes"

export const toggleCartHidden=()=>{
    return {
        type:actionTypes.TOGGLE_CART_HIDDEN
    }
}

export const addItem=(item)=>{
    return {
        type:actionTypes.ADD_ITEM,
        payload:item
    }
}

export const quantityChange=(item,operation)=>{
    return {
        type:actionTypes.QUANTITY_CHANGE,
        payload:{
            item,
            operation
        }
    }
}

export const removeItem=(item)=>{
    return {
        type:actionTypes.REMOVE_ITEM,
        payload:item
        
    }
}




