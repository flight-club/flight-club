import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMember, setLoggedIn } from '../../redux/reducer';

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            member: [],
            loggedIn: false
        }

    }

    
    componentDidUpdate(prevProps){
        if(this.prevProps !== this.props.member) {
            this.props.getMember()
        }

    }

    logout = () => {
        axios
        .post('/logout')
        .then(res => {
            this.props.setLoggedIn(false)
            console.log(res.data)
        })
    }

    render() {

        // const loggedIn = this.state.loggedIn

        // console.log(this.props.member.length)
        return (
            <div className='nav'>
                <div className='nav--left'>
                    <div className='logo'>
                        <Link to='/' style={{textDecoration:'none'}}><h1>ALPHA</h1></Link>
                        <i class="far fa-paper-plane"></i>
                    </div>

                    <div className='page-links'>
                        <p>BOOK</p>
                        <p>CHECK-IN</p>
                        <p>FLIGHT STATUS</p>
                    </div>
                </div>

                <div className='nav--right'>
                    {this.props.loggedIn === false  ? 
                    <Link to='/auth/signup' style={{textDecoration:'none'}}><button id='sign-up'>SIGN UP</button></Link>
                    :
                    <Link  to={`/dashboard/${this.props.member.id}`}><button>My Account</button></Link>
                    }

                    {this.props.loggedIn === false ?
                    <Link to='/auth/login'><button id='log-in'>LOG IN</button></Link>
                    :
                    <Link to='/' onClick={this.logout}><button>Log Out</button></Link>
                    }
                    {/* <button onClick={this.logout}>Log Out</button> */}
                </div>
            </div>
        )
    }
}


const mapStateToProps = reduxState => {
    // console.log(reduxState)
    const {member, loggedIn} = reduxState.reducer;
    return {
        member,
        loggedIn
    }
}

export default connect( mapStateToProps, {getMember, setLoggedIn})(Nav);