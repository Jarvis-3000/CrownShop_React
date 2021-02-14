import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import "./app.scss"

//pages/components 
import Checkout from "./components/checkout/checkout"
import Header from "./components/header.component/header"
import MenuItems from "./components/menu.component/MenuItems"
import Categories from "./components/previewCollection.component/categories"
import SpecificShopCategory from "./components/previewCollection.component/specificShopCategory/specificCategory"
import SignInAndSignUp from "./components/signIn-signUp.component/signIn-and-signUp"
import Page404 from "./components/404/page404"

//google auth modules
import { auth } from "./components/signIn-signUp.component/firebase_auth/firebase.utils"

//react-redux modules
import { connect } from "react-redux"
import { setCurrentUser } from "./redux/user/user.actions"


const category_routes=["hats","jackets","womens","mens","sneakers"]

class App extends React.Component {

  unSubscribeFromAuth = null

  componentDidMount() {
    //retrievinf from firebase database
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({ currentUser: user })
      this.props.setCurrentUser(user)

    })
  }

  componentWillUnmount() {
    //to logout/signout
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div className="app">
        <Header/>

        <Switch>
          <Route exact path="/" component={MenuItems} />
          <Route exact path="/shop" component={Categories} />

          <Route exact path={`/shop/${window.location.pathname.split("/")[2]}`}  render={()=>{
            
            //for checking if path does not exist then 404 
            
            const path=window.location.pathname.split("/")
            console.log("path2",path[2])

            if(path.length > 3){
              return (<Page404/>)
            }
            else if(!category_routes.includes(path[2])){
              return (<Page404/>)
            }
            else {
              return (<SpecificShopCategory/>)
            }
          }}
          />
         
          <Route exact path="/checkout" component={Checkout} />

          <Route exact path="/signin" render={() => {

            // this.props.currentUser?(<Redirect to="/"/>):(<SignIn_and_SignUp/>)

            //if signedIn then redirect to "/" else render the component
            if (this.props.currentUser) {
              return (<Redirect to="/" />)
            }
            else {
              return <SignInAndSignUp />
            }
          }}
          />

          <Route component={Page404}/>    //default page
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    category: state.categories.category,
    currentUser: state.user.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


// the first arguments of connect is mapStateToProps and second is mapDispatchToProps
// since we don't need any state we will pass first argument as null
