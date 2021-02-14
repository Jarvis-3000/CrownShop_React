import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import "./header.style.scss"
import CartDropDown from "../cartDropDown/cartDropDown"
import CartIcon from "../cartIcon/cartIcon"

import {auth} from "../signIn-signUp.component/firebase_auth/firebase.utils"

function mapStateToProps(state){
    console.log(state.cartDisplay.hidden)
    return {
        currentUser:state.user.currentUser,
        cartHidden:state.cartDisplay.hidden
    }
}

function Header({currentUser,cartHidden}){
    return (
        <div className="header">
            <Link to="/" className="logo">
                <img alt="logo" src="http://localhost:3000/crown.png"/>
            </Link>
            <h1 className="heading">CROWN SHOP</h1>
            <div className="navigation">
                <Link to="/" className="link">HOME</Link>
                
                {/* for toggling signin and signout button */}
                {
                    !currentUser?
                    <Link to="/signin" className="link">SIGN-IN</Link>
                    :
                    <div className="link" style={{'cursor':'pointer'}} onClick={()=>auth.signOut()}>SIGN-OUT</div>
                }
                   
                <Link to="/shop" className="link">SHOP</Link>
                {/* <Link to="/cart" className="link"> */}
                <CartIcon/>
                {/* </Link> */}
            </div>
            {
                cartHidden?
                null
                :
                <CartDropDown/>
            }
        </div>


    )
}



export default connect(mapStateToProps)(Header)