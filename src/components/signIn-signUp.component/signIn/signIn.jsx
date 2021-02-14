import React from "react"
import "./signIn.style.scss"
import {GmailSign} from "../firebase_auth/firebase.utils"

import CustomButton from "../../customButton/customButton"

class SignIn extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.setState({ email: '', password: '' }) 
        alert("Successfully Signed In!")
        
        
    }

    handleChange = (event) => {
        const { name, value } = event.target         //destructuring

        this.setState({ [name]: [value] })
    }

    render() {
        return (
            <div className="signInContainer">

                <form className="signIn" onSubmit={this.handleSubmit}>

                    <h1 style={{ "color": "white" }}>Sign-In</h1>

                    <div className="formInput">
                        <label className="label">Email</label>
                        <input type="email" name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            required
                        />
                    </div>

                    <div className="formInput">
                        <label className="label">Password</label>
                        <input type="password" name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            required
                        />
                    </div>

                    <div className="submitButtons">
                        <CustomButton type="submit" bgColor="blue" color="white">Submit</CustomButton><br></br>
                        <CustomButton type="button" bgColor="rgb(255, 87, 9)" color="white" onClick={GmailSign}>SignIn with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn