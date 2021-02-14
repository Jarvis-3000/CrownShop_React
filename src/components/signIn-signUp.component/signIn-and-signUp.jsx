import React from "react"
import "./signIn-and-signUp.style.scss"

import SignIn from "./signIn/signIn"
import SignUp from "./signUp/signUp"

function SignIn_and_SignUp(){
    return(
        <div className="signIn_and_signUp">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignIn_and_SignUp