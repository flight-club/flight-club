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
        // this.signupMember = this.signupMember.bind(this)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
    
    signupMember = (e) => {
        e.preventDefault()
        // console.log(this.state)
        axios.post('/register', { first_name: this.state.first_name, last_name: this.state.last_name, gender: this.state.gender, birthdate: this.state.birthdate,
            address: this.state.address, address2: this.state.address2, city: this.state.city, state: this.state.state, zip: this.state.zip, phone: this.state.phone,
            email: this.state.email, username: this.state.username, password: this.state.password})
        .then(() => this.setState({redirect: true})).catch((err) => alert(err, 'Username Taken'))
    }

    render() {
        if(this.state.redirect){
            alert("Please Log In")
            return<Redirect to="/auth/login" />
        }
        return (
            <div>
            <div className="container">
           <h3>Create a New Account</h3>
        
        <div>
            <input name='first_name' value={this.state.first_name} onChange={this.handleChange} placeholder="firstName" />
            <input name='last_name' value={this.state.last_name} onChange={this.handleChange} placeholder="lastName" />
            <input name='gender' value={this.state.gender} onChange={this.handleChange} placeholder="gender"/>
            <input name='birthdate' value={this.state.birthdate} onChange={this.handleChange} placeholder="birthdate"/>
            <input name='address' value={this.state.address} onChange={this.handleChange} placeholder="address"/>
            <input name='address2' value={this.state.address2} onChange={this.handleChange} placeholder="address2"/>
            <input name='city' value={this.state.city} onChange={this.handleChange} placeholder="city"/>
            <input name='state' value={this.state.state} onChange={this.handleChange} placeholder="state"/>
            <input name='zip' value={this.state.zip} onChange={this.handleChange} placeholder="zip"/>
            <input name='phone' value={this.state.phone} onChange={this.handleChange} placeholder="phone"/>
            <input name='email' value={this.state.email} onChange={this.handleChange} placeholder="email@email.com"/>
            <input name='username' value={this.state.username} onChange={this.handleChange} placeholder="username"/>
            <input name='password' value={this.state.password} onChange={this.handleChange}placeholder="password" type="password"/>
        </div>
        <button className="signup-member" onClick={this.signupMember}>Add New Account</button>
        </div>
        </div>
        )
    }
}

export default SignUp;