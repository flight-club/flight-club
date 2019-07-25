import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getFlight} from '../../redux/flightReducer'
import {Doughnut} from 'react-chartjs-2';

const getState = () => ({


    labels: [
        'My miles',
        'Goal'
      ],
    datasets: [{
      data: [5642, 10000],
      backgroundColor: [
      '#e01833',
      '#11182b'
      ],
      hoverBackgroundColor: [
      '#11182b',
      '#3d6e96'
      ],
     borderWidth: [
          '20px'
      ]
    }]
  });


class Snapshot extends Component {
    constructor() {
        super()
        this.state = {
            flights: []
        }
    }

    getInitialState() {
		return getState();
    }
    

    componentDidMount() {
        
        this.props.getFlight()

        setInterval(() => {
			this.setState(getState(this.props.flight));
		}, 100)

    }

    render() {
        console.log(this.props.flight)
        console.log(this.state)
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
                                <Doughnut data={this.state} />
                                        {/* <i class="fas fa-circle-notch"></i> */}
                                        {/* <Doughnut data={this.state} /> */}
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
                                <Doughnut data={this.state} />
                                    {/* <Doughnut data={this.state} /> */}
                                    {/* <i class="fas fa-circle-notch"></i> */}
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

const mapStateToProps = reduxState => {
    
    const {flight} = reduxState.flightReducer;
    return {
        flight,
      
    }
}

export default connect( mapStateToProps, {getFlight})(Snapshot);