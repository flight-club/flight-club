import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMember, setLoggedIn } from '../../redux/reducer';
import { getFlight } from '../../redux/flightReducer';
import Book from './Book/Book';
import Checkin from './Checkin/Checkin';
import FlightStatus from './FlightStatus/FlightStatus'; 

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            member: [],
            loggedIn: false,
            view: 'none'
        }
        this.updateView = this.updateView.bind(this)
    }

    componentDidMount(){
        
        this.props.getFlight(this.props.member.id)
        this.updateView()
        window.addEventListener("hashchange", this.updateView, false)
    }


    componentDidUpdate(prevProps){
        if(this.prevProps !== this.props.member) {
            this.props.getMember()
            
        }

    }

    updateView(){
        if(window.location.hash === '#/' ){
            this.setState({view: 'book'})
        }
        else{
            this.setState({view: 'none'})
        }
    }

    logout = () => {
        axios
        .post('/logout')
        .then(res => {
            this.props.setLoggedIn(false)
        })
    }

    viewBook = () => {
        this.setState({ view: 'book'})
    }

    viewCheckin = () => {
        this.setState({ view: 'checkin' })
    }

    viewFlightStatus = () => {
        this.setState({ view: 'flightStatus' })
    }

    render() {
        const { view } = this.state
const {flight} = this.props.flight

        return (
            <div>
                    <div className='nav'>
                        <div className='nav--left'>
                            <div className='logo'>
                                <Link to='/' style={{textDecoration:'none'}}><h1>ALPHA</h1></Link>
                                <i class="far fa-paper-plane"></i>
                            </div>

                            <div className='page-links'>
                                <button onClick={this.viewBook}>BOOK</button>
                                <button onClick={this.viewCheckin}>CHECK-IN</button>
                                <button onClick={this.viewFlightStatus}>FLIGHT STATUS</button>
                            </div>
                        </div>

                        <div className='nav--right'>
                            {this.props.loggedIn === false  ? 
                            <Link to='/auth/signup' style={{textDecoration:'none'}}><button id='sign-up'>SIGN UP</button></Link>
                            :
                            <Link  to={`/dashboard/${this.props.member.id}`}><button id='account'>My Account</button></Link>
                            }

                            {this.props.loggedIn === false ?
                            <Link to='/auth/login'><button id='log-in'>LOG IN</button></Link>
                            :
                            <Link to='/' onClick={this.logout}><button id='log-out'>Log Out</button></Link>
                            }
                            {/* <button onClick={this.logout}>Log Out</button> */}
                        </div>
                    </div>

                    <div className='bottomNav'>
                            {   view === 'book' ?
                                < Book />
                                : 
                                view === 'checkin' ?
                                < Checkin />
                                :
                                view === 'flightStatus' ?
                                < FlightStatus />
                                :
                                <div></div>
                            }
                    </div>
            </div>
        )
    }
}


const mapStateToProps = reduxState => {
    const {member, loggedIn} = reduxState.reducer;
    const {flight} = reduxState.flightReducer;
    return {
        flight,
        member,
        loggedIn
    }
}

export default connect( mapStateToProps, {getMember, getFlight, setLoggedIn})(Nav);