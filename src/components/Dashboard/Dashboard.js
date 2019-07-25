import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getMember } from '../../redux/reducer';
import { getFlight } from '../../redux/flightReducer';
import Snapshot from './Snapshot';
import Upcoming from './Upcoming';
import Info from './Info';

class Dashboard extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            flights: [],
            member: [],
            view: 'snapshot',
        }
    }

    componentDidMount() {

        this.props.getFlight()
        

        axios
        .get(`/dashboard/${this.props.match.params.id}`)
        .then(res=> {
            console.log(res.data)
            this.setState({member: res.data[0]})
        })
    }

    getTotalMiles = (cost1, cost2) => {
        let ticketCost = Number(cost1)
        let returnTicketCost = Number(cost2)

        let finalCost = ticketCost + returnTicketCost

        return finalCost
    }

    getFlight = () => {
        this.setState({ flights: this.props.flight[0]
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
        // console.log(this.props)
        const { view } = this.state;
    console.log(this.props.member.confirmation) 
// console.log(this.props.flight[0].miles)     

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
                                <h2>{this.getTotalMiles(this.props.flight, this.props.flight)}</h2>
                            </div>
                        </div>

                        <div className='account-info--bottom'>
                            { view === 'snapshot' ? 
                                < Snapshot member={this.state.member} flight={this.props.flight}/>    
                                :
                                view === 'upcoming' ?
                                < Upcoming member={this.state.member} flight={this.props.flight}/>
                                : 
                                < Info member={this.state.member} flight={this.props.flight}/>
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
    const {flight} = reduxState.flightReducer;
    return {
        flight,
        member
    }
}

export default connect( mapStateToProps, {getMember, getFlight})(Dashboard);