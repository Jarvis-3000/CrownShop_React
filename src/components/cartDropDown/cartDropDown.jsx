import React from "react"
import "./cartDropDown.style.scss"
import CartItem from "./cart-item/cartItem"

import {connect} from "react-redux"
import {withRouter, useHistory} from "react-router-dom"

import {toggleCartHidden} from "../../redux/cart/cart.actions"
import CustomButton from "../customButton/customButton"



// React Hook "useHistory" cannot be called at the top level. 
// React Hooks must be called in a React function component or 
// a custom React Hook function  react-hooks/rules-of-hooks

// const history=useHistory()

function CartDropDown({toggleCartHidden, cartItems}){
    
    const history=useHistory()      //this is the perfect place 

    return (
        <div className="cartDropDown">
            <div className="cartItems">
                {
                    (cartItems.length>0)?
                     cartItems.map(item=>{
                        //if quantity 0 then don't show
                        return (
                            (item.quantity>0)?
                            <CartItem id={item.id} item={item}/>
                            :
                            null
                        )
                    })
                    :
                    <div className="noItem">
                        <p>Your Cart Is Empty !!!</p>
                        <img alt="sadFace" src="http://localhost:3000/sadFace.png"/>
                    </div>
                }
            </div>
            
            <CustomButton onClick={()=>{
                history.push("/checkout")
                toggleCartHidden()
            }}  bgColor="black" color="white">
                Go To Checkout
            </CustomButton>
            
        </div>
    )
}

function mapStateToProps(state){
    console.log(state.cartDisplay.cartItems.length)
    return{
        cartItems:state.cartDisplay.cartItems
    }
}

function mapDispatchToProps(dispatch){
    return {
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown))