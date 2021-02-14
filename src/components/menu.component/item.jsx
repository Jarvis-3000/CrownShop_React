import React from 'react'
import { selectCategory } from '../../redux/category/category.actions'
import "./item.style.scss"

import {connect} from "react-redux"
import {useHistory} from "react-router-dom"

function Item({item,selectCategory}){

    let history=useHistory()

    return (
        <div className="item" style={
            {
                width:`${item.width}`,
                height:`${item.height}`
            }
        }>

            <div className="background_image" style={
                {backgroundImage:`url(${item.img_url})`}
            }></div>

            <div className="content" onClick={()=>{
                // to select the category
                selectCategory(item.title)
                //to redirect on categories page
                history.push(`/shop/${item.title.toLowerCase()}`)
            }}>

                <h1 className="title">{item.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        selectCategory:(category)=>dispatch(selectCategory(category))
    }
}

export default connect(null,mapDispatchToProps)(Item)