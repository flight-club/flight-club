import React, {Component} from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <div className='account-container'>
                    <div className='options'>
                        <div className='options--user'>
                            <h1>Hi, Jonny! </h1>
                            <h2>Alpha #10001</h2>
                        </div>

                        <div className='options--box'>
                            <h1>Snapshot</h1>
                        </div>

                        <div className='options--box'>
                            <h1>Upcoming Flights</h1>
                        </div>

                        <div className='options--box'>
                            <h1>Account Info</h1>
                        </div>
                    </div>

                    <div className='account-info'>
                        <div className='account-info--top'>
                            <div className='top-left'>
                                <h1>Alpha Miles Member</h1>
                            </div>

                            <div className='top-right'>
                                <h4>Total Balance</h4>
                                <h2>784 Miles</h2>
                            </div>
                        </div>

                        <div className='account-info--bottom'>
                            <div className='bottom-top'>
                                <div className='bottom-top--title'>
                                    <h2>Alpha-List, </h2>
                                    <h3>here I come.</h3>
                                </div>

                                <div className='perks'>
                                    <h4>Priority Boarding - Priority Checkin - Security Lane Access</h4>
                                </div>

                                <div className='donut-chart'>
                                        <i class="fas fa-circle-notch"></i>
                                        <i class="fas fa-circle-notch"></i>
                                </div>
                            </div>

                            <div className='bottom-bottom'>
                                <div className='bottom-bottom--title'>
                                    <h2>Companion Pass, </h2>
                                    <h3>on my way.</h3>
                                </div>

                                <div className='perks'>
                                    <h4>Designate one person to fly with you anytime for a year.</h4>
                                </div>

                                <div className='donut-chart'>
                                    <i class="fas fa-circle-notch"></i>
                                    <i class="fas fa-circle-notch"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;