import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {getMember, setLoggedIn} from '../../redux/reducer'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor() {
        super()
        this.state= {
            username: '',
            password: '',
            login: true,
            redirect: false, 
            id: ''
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
        .then((res) => {
            this.props.setLoggedIn(true)
            this.setState({redirect: true, id: res.data.id})
        })
        .catch(() => {alert('Login Unsuccessful')})
    }

    render() {
        console.log(this.props)
        if(this.state.redirect){
            alert('Login successful!')
            return <Redirect to={`/dashboard/${this.state.id}`} />
        }
        return (
            <div className='full-login'>
                <div className='login-container'>

                    <div className='logIn-logo'>
                        <i class="fas fa-paper-plane"></i>
                    </div>

                    <div className='top'>
                        <h2>Log In To Alpha Airlines</h2>
                        <h4>All fields are required.</h4>
                    </div>

                    <div className='inputs'>
                        <div>
                            <h3>Username</h3>
                            <input className='login-input' name='username' value={this.state.username} onChange={this.handleChange}></input>
                        </div>

                        <div>
                            <h3>Password</h3>
                            <input className='password-input' name='password' value={this.state.password} onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div>
                        <button onClick={this.login}> Log In</button>
                    </div>

                    <div className='link'>
                        <Link to='/auth/signup' style={{textDecoration:'none'}}><h3>Join Alpha Miles</h3></Link>
                    </div>

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

export default connect(mapStateToProps, {setLoggedIn})(Login)