import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"

import App from "./app.js"
import {persistor,store} from "./redux/store"

ReactDOM.render(
<Provider store={store}> 
    <BrowserRouter>
        <PersistGate persistor={persistor}>
            <App/>
        </PersistGate>
    </BrowserRouter>
</Provider>,
document.querySelector("#root")
) 



// Note:
// <Provider> is a component that wraps up the whole app 
// so that we can access all the functions of redux in our app. 