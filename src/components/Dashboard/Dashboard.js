import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getMember } from '../../redux/reducer';
import Snapshot from './Snapshot';
import Upcoming from './Upcoming';
import Info from './Info';

class Dashboard extends Component {
    constructor() {
        super() 
        this.state = {
            member: [],
            view: 'snapshot'
        }
    }

    componentDidMount() {
        axios
        .get(`/dashboard/${this.props.match.params.id}`)
        .then(res=> {
            console.log(res.data)
            this.setState({member: res.data[0]})
        })
    }

    getInfo = () => {
        this.setState({ view: 'info'})
    }

    getUpcoming = () => {
        this.setState({ view: 'upcoming' })
    }

    getSnapshot = () => {
        this.setState({ view: 'snapshot' })
    }

    render() {
        const { view } = this.state;
        console.log(this.state.member)

        return (
            <div className='dashboard'>
                <div className='account-container'>
                    <div className='options'>
                        <div className='options--user'>
                            <h1>Hi, {this.state.member.first_name} </h1>
                            <h2>Alpha #{this.state.member.id}</h2>
                        </div>

                        <div className='options--box'>
                            <button onClick={this.getSnapshot}>Snapshot</button>
                        </div>

                        <div className='options--box'>
                            <button onClick={this.getUpcoming}>Upcoming Flights</button>
                        </div>

                        <div className='options--box'>
                            <button onClick={this.getInfo}>Account Info</button>
                        </div>
                    </div>

                    <div className='account-info'>
                        <div className='account-info--top'>
                            <div className='top-left'>
                                <h1>Alpha Miles Member</h1>
                            </div>

                            <div className='top-right'>
                                <h4>Total Balance</h4>
                                <h2>{this.state.member.miles || 'None'}</h2>
                            </div>
                        </div>

                        <div className='account-info--bottom'>
                            { view === 'snapshot' ? 
                                < Snapshot member={this.state.member}/>    
                                :
                                view === 'upcoming' ?
                                < Upcoming member={this.state.member}/>
                                : 
                                < Info member={this.state.member}/>
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {member} = reduxState.reducer;
    return {
        member
    }
}

export default connect( mapStateToProps, {getMember})(Dashboard);