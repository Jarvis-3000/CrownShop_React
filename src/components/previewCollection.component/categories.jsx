import React from "react"
import CollectionPreview from "./shop"
import "./categories.style.scss"

import {selectCategory} from "../../redux/category/category.actions"
import { connect } from "react-redux"
import {useHistory} from "react-router-dom"

function Categories({selectCategory, categories}){

    const history=useHistory()
    
    return (
        <div className="categories">
            {
                categories.map(category => {
                    return (
                        
                        <div key={category.id}>
                            <h1 className="cate_head"
                                onClick={() => {
                                    // to select the category
                                    selectCategory(category.title)
                                    //to redirect on categories page
                                    history.push(`/shop/${category.title.toLowerCase()}`)
                                }}
                            >
                                {category.title}
                            </h1>
                            <CollectionPreview limit={4} items={category.items} />
                        </div>
                    )
                })
            }
        </div>
    )

}

function mapStateToProps(state) {
    return {
        categories: state.categories.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectCategory: (category) => dispatch(selectCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)

