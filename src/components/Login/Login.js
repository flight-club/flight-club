import React, {Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {getMember} from '../../redux/reducer'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor() {
        super()
        this.state= {
            username: '',
            password: '',
            login: true,
            redirect: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    login = () => {
        console.log(this.state.username)
        let {username, password} = this.state
        axios
        .post('/login', {username: username, password: password})
        .then(() => this.setState({redirect: true}))
        .catch(() => {alert('Login Unsuccessful')})
    }

    render() {
        console.log(this.props)
        if(this.state.redirect){
            alert('Login successful!')
            return <Redirect to={'/dashboard'} />
        }
        return (
            <div className='login'>
                <div>
                    <h2>Log In To Alpha</h2>
                    <h4> All fields are required</h4>
                    <input className='login-input' placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange}></input>
                    <input className='password-input' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange}></input>
                    <button onClick={this.login}> Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {member} = reduxState.reducer 
    return {
        member
    } 
}

export default connect(mapStateToProps,)(Login)