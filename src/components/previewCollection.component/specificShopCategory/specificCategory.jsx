import React from "react"
import "./specificShopCategory.style.scss"
import CollectionPreview from "../shop"
import { connect } from "react-redux"
import { selectCategory } from "../../../redux/category/category.actions"

function SpecificShopCategory({ selectCategory , specificShopCategory}) {

    selectCategory(window.location.pathname.split("/")[2])
    
    return (
        <div className="specifiedCategory">
            <div>
                <h1 className="specifiedCate_head">{specificShopCategory.title}</h1>
                <CollectionPreview  items={specificShopCategory.items} />
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    console.log("Specific", state.categories.collection[0])
    return {
        specificShopCategory: state.categories.collection[0]
    }
}

function mapDispatchToProps(dispatch) {

    return {
        selectCategory: (category) => dispatch(selectCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecificShopCategory)

