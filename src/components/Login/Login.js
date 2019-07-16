import React, {Component} from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor() {
        super()
        this.state= {
            username: '',
            password: '',
            redirect: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    login = () => {
        let {username, password} = this.state
        axios
        .post('/login', {username: username, password: password})
        .then(() => this.setState({redirect: true}))
        .catch(() => {alert('Login Unsuccessful')})
    }

    render() {

        

        return (
            <div className='login'>
                <div>
                    <h2>Log In To Alpha</h2>
                    <h4> All fields are required</h4>
                    <input className='login-input' placeholder='Username' name='username'></input>
                    <input className='password-input' placeholder='Password' name='password'></input>
                    <button onClick={this.login}> Login</button>
                </div>
            </div>
        )
    }
}

export default Login;