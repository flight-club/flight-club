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
            zip: "",
            phone: "",
            email: "",
            username: "",
            password: "",
            miles: "",
            redirect: false
        }
        
        this.handleFirst_name = this.handleFirst_name.bind(this)
        this.handleLast_name = this.handleLast_name.bind(this)
        this.handleGender = this.handleGender.bind(this)
        this.handleBirthdate = this.handleBirthdate.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleAddress2 = this.handleAddress2.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleZip = this.handleZip.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        // this.handleMiles = this.handleMiles.bind(this)
        
        // this.signupUser = this.signupUser.bind(this)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
    
    // handleFirst_name(e){
    //     this.setState({first_name: e.target.value})
    // }
    // handleLast_name(e){
    //     this.setState({last_name: e.target.value})
    // }
    // handleGender(e){
    //     this.setState({gender: e.target.value})
    // }
    // handleBirthdate(e){
    //     this.setState({birthdate: e.target.value})
    // }
    // handleAddress(e){
    //     this.setState({address: e.target.value})
    // }
    // handleAddress2(e){
    //     this.setState({address2: e.target.value})
    // }
    // handleCity(e){
    //     this.setState({city: e.target.value})
    // }
    // handleState(e){
    //     this.setState({state: e.target.value})
    // }
    // handleZip(e){
    //     this.setState({zip: e.target.value})
    // }
    // handlePhone(e){
    //     this.setState({phone: e.target.value})
    // }
    // handleEmail(e){
    //     this.setState({email: e.target.value})
    // }

    // handleUsername(e){
    //     this.setState({username: e.target.value})
    // }

    // handlePassword(e){
    //     this.setState({password: e.target.value})
    // }

    signupMember() {
        console.log(this.state)
        axios.post("/register", { first_name: this.state.first_name, last_name: this.state.last_name, gender: this.state.gender,birthdate: this.state.birthdate,
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
        </div>
        </div>
        )
    }
}

export default SignUp;