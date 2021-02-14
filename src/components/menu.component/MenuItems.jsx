import React from 'react'
import "./MenuItems.style.scss"
import Item from "./item.jsx"

import {connect} from "react-redux"

class MenuItems extends React.Component{
    
    shouldComponentUpdate(){
        return true
    }

    render(){
        return (                                            //return the list of items
            <div className="menu_items">
                {
                    this.props.items_content.map(item=>{
                        return <Item key={item.id} item={item}/>          //returns only one item
                    })
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        items_content:state.menuDisplay.items_content   
    }
}

export default connect(mapStateToProps)(MenuItems)