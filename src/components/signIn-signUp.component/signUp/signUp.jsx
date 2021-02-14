import React from "react"
import "./signUp.style.scss"

import CustomButton from "../../customButton/customButton"

class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        
        if(!(this.state.confirmPassword[0] === this.state.password[0])){
            alert("password don't match!")
            return 
        }
        this.setState({email:'',password:'',confirmPassword:''})
        alert("Successfully Signed Up!")
          
    }

    handleChange=(event)=>{
        const {name,value}=event.target         //destructuring

        this.setState({[name]:[value]})
    }

    render(){
        return (
            <div className="signUpContainer">
                
                <form className="signUp" onSubmit={this.handleSubmit}>
                    
                    <h1 style={{"color":"white"}}>Sign-Up</h1>

                    <div className="formInput">
                        <label className="label">Username</label>
                        <input type="text" name="username" 
                            onChange={this.handleChange} 
                            value={this.state.username} 
                            required
                        />
                    </div>
                    
                    <div className="formInput">
                        <label className="label">Email</label>
                        <input type="text" name="email" 
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

                    <div className="formInput">
                        <label className="label">Confirm Password</label>
                        <input type="password" name="confirmPassword" 
                             onChange={this.handleChange} 
                             value={this.state.confirmPassword} 
                             required
                        />
                    </div>

                    <div className="submitButtons">
                        <CustomButton bgColor="blue" color="white" type="submit">Submit</CustomButton> 
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp