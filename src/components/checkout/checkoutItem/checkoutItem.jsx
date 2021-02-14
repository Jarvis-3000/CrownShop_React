import React from "react";

import "./checkoutItem.style.scss";

import { connect } from "react-redux";
import { quantityChange, removeItem } from "../../../redux/cart/cart.actions";

function CheckoutItem({ item, quantityChange, removeItem}) {
    return (
        // <>
        //     {
        //     (item.quantity>0) ? (
                <div className="checkoutItem">
                    <div className="itemImage">
                        <img alt="product" src={item.imageUrl} />
                    </div>
                    <span className="description">{item.name}</span>
                    <div className="quantityContainer">
                        <h1 className="quantityDecrease" onClick={() =>{ 
                            (item.quantity>1)? quantityChange(item, "-") : removeItem(item) 
                        }}
                        >
                            {"<  "}
                        </h1>

                        <span className="quantity"> {item.quantity} </span>

                        <h1 className="quantityIncrease" onClick={() => quantityChange(item, "+")}>
                            {"  >"}
                        </h1>
                    </div>
                    <span className="price">${item.quantity * item.price}</span>
                    <span className="remove" onClick={()=>removeItem(item)}>X</span>
                </div>
            // ) 
            
            // : 
            // null
            
            // }
        // </>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        quantityChange: (item, operation) =>dispatch(quantityChange(item, operation)),
        removeItem:(item)=>dispatch(removeItem(item))
    };
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
