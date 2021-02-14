import React from "react"
import "./cartItem.style.scss"

function CartItem({item}){
    return (
        <div className="cartItem">
            <img alt={item.name} src={item.imageUrl} className="cartItemImage"/>
            <div className="cartItemInfo">
                <span className="itemName">{item.name}</span>
                <span className="itemPrice">{item.quantity}x${item.price}</span>
            </div>
        </div>
    )
}


export default CartItem