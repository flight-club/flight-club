import React, {Component} from 'react';

class Snapshot extends Component {
    render() {
        return (
            <div className='snapshot'>
                        <div className='snapshot-bottom'>
                            <div className='snapshot-top'>
                                <div className='snapshot-top-title'>
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

                            <div className='snapshot-snapshot'>
                                <div className='snapshot-snapshot--title'>
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
        )
    }
}

export default Snapshot;