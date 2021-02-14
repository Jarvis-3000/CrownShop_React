import React from "react"
import "./cartIcon.style.scss"
import {connect} from "react-redux"
import {toggleCartHidden} from "../../redux/cart/cart.actions"

function mapDispatchToProps(dispatch){
    return {
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    }
}

function mapStateToProps(state){
    
    const checkoutItems=state.cartDisplay.cartItems
    let countItems=0

    checkoutItems.forEach(item => {
        countItems += item.quantity
    })

    return{
        countItems
    }
}

function CartIcon({toggleCartHidden, countItems}) {
    return (
        <div className="cart" onClick={toggleCartHidden}>
            <img alt="Cart" src="http://localhost:3000/shoping-bag.svg" className="cartImg" />
            <div className="cartItemCount">{countItems}</div>
        </div>
    )
}



export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)