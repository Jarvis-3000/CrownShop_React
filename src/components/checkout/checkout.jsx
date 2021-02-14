import React from "react"
import "./checkout.style.scss"

import CheckoutItem from "./checkoutItem/checkoutItem"

import StripeCheckoutButton from "../stripe-button/stripeButton"

import {connect} from "react-redux"

import {toggleCartHidden} from "../../redux/cart/cart.actions"
import CustomButton from "../customButton/customButton"


function Checkout({toggleCartHidden, checkoutItems, totalPrice}){
    
    // toggleCartHidden()

    return(
        <div className="checkoutContainer">
            <div className="checkoutHeader">
                <span>Item</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>

            <div className="checkoutItems">
                {
                    checkoutItems.map(checkoutItem=>{
                        //if quantity 0 then don't show
                        return (
                            (checkoutItem.quantity>0)?
                            <CheckoutItem id={checkoutItem.id} item={checkoutItem}/> 
                            : 
                            null
                        )
                    })
                }
            </div>
            
            <div className="totalPrice">Total: ${totalPrice}</div>
            
            <div className="checkoutInfo">
                *Please use the following test credit cart for payments*
                <br></br>
                4242 4242 4242 4242 ---- Exp: 05/21 ---- CVV:    
            </div>
            
            <div className="paymentSection">
                <StripeCheckoutButton price={totalPrice }/>
                {/* <CustomButton bgColor="blue" color="white">Pay</CustomButton> */}
            </div>
        </div>
    )
}

function mapStateToProps(state){
    const checkoutItems=state.cartDisplay.cartItems
    let totalPrice=0

    checkoutItems.forEach(item => {
        totalPrice += (item.price*item.quantity)
    });

    return{
        checkoutItems,
        totalPrice
    }
}

function mapDispatchToProps(dispatch){
    return {
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)