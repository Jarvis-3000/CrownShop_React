import * as actionTypes from "./categories.actionTypes"


export const selectCategory=(category)=>{
    return {
        type:actionTypes.SELECT_CATEGORY,
        payload:category
        
    }
}
