import React from "react"
import "./shop.style.scss"

import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cart.actions"

function CollectionPreview({ items, addItem ,limit}) {
    return (
        <div className="collection">
            {/* <div className="cate_itemContainer"> */}
                {
                    items.filter(item=>{
                        if(limit && item.id<=limit){
                           return item
                        }
                        else if(limit==null){
                            return item
                        } 
                    })
                    .map(item => {
                            return (
                                <div key={item.id} className="cate_item">

                                    <div className="cate_img">
                                        <div className="cate_backgroundImage" style={
                                            { backgroundImage: `url(${item.imageUrl})` }
                                        }></div>
                                    </div>

                                    <div className="cate_content">
                                        <p className="cate_itemTitle">{item.name.toUpperCase()}</p>
                                        <p className="cate_itemPrice">${item.price}</p>
                                    </div>

                                    <button className="cate_subtitle" onClick={()=>addItem(item) }>
                                        ADD TO CART
                                    </button>
                                </div>
                            )
                        })
                }
            {/* </div> */}
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        addItem:(item)=>dispatch(addItem(item))
    }
}

export default connect(null,mapDispatchToProps)(CollectionPreview)