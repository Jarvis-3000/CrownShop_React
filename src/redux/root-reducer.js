import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

//reducers
import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"
import menuReducer from "./menu/menu.reducer"
import categoriesReducer from "./category/categories.reducer"


const persistConfig={
    key:'root',
    storage,
    // blackList:['user'],       //only user will not be persisted (stored)
    whitelist:['cartDisplay','categories']       // only navigation will be persisted
}

const rootReducer=combineReducers({
    user:userReducer,
    cartDisplay:cartReducer,
    menuDisplay:menuReducer,
    categories:categoriesReducer
})

export default persistReducer(persistConfig,rootReducer)