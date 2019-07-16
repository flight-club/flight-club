import React, {Component} from 'react';
import axios from "axios";
import {Redirect, Link } from  "react-router-dom";


class SignUp extends Component {
    constructor(){
        super()
        this.state ={
            first_name: "",
            last_name: "",
            gender: "",
            birthdate: "",
            address: "",
            address2: "",
            city: "",
            state: "",
            zip: 0,
            phone: "",
            email: "",
            username: "",
            password: "",
            miles: 0,
            redirect: false
        }
        this.signupMember = this.signupMember.bind(this)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
    


    signupMember() {
        // console.log(this.state)
        axios.post("/register", { first_name: this.state.first_name, last_name: this.state.last_name, gender: this.state.gender, birthdate: this.state.birthdate,
            address: this.state.address, address2: this.state.address2, city: this.state.city, state: this.state.state, zip: this.state.zip, phone: this.state.phone,
            email: this.state.email, username: this.state.username, password: this.state.password})
        .then(() => this.setState({redirect: true})).catch((err) => alert(err, 'Username Taken'))
    }

    render() {
        if(this.state.redirect){
            alert("Please Log In")
            return<Redirect to="/login" />
        }
        return (
            <div>
            <div className="container">
           <h3>Create a New Account</h3>
        
        <div>
            <input name='first_name' onChange={this.handleFirst_name} placeholder="firstName" />
            <input name='last_name' onChange={this.handleLast_name} placeholder="lastName" />
            <input name='gender' onChange={this.handleGender} placeholder="gender"/>
            <input name='birthdate' onChange={this.handleBirthdate} placeholder="birthdate"/>
            <input name='address' onChange={this.handleAddress} placeholder="address"/>
            <input name='address2' onChange={this.handleAddress2} placeholder="address2"/>
            <input name='city' onChange={this.handleCity} placeholder="city"/>
            <input name='state' onChange={this.handleState} placeholder="state"/>
            <input name='zip' onChange={this.handleZip} placeholder="zip"/>
            <input name='phone' onChange={this.handlePhone} placeholder="phone"/>
            <input name='email' onChange={this.handleEmail} placeholder="email@email.com"/>
            <input name='username' onChange={this.handleUsername} placeholder="username"/>
            <input name='password' onChange={this.handlePassword}placeholder="password" type="password"/>
        </div>
        <button className="signup-member" onClick={this.signupMember}>Add New Account</button>
        </div>
        </div>
        )
    }
}

export default SignUp;