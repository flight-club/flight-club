import React, {Component} from 'react';

class FlightStatus extends Component {
    render() {
        return (
            <div className='flight-status'>
                
            <i class="fas fa-paper-plane"></i>
            <div className='status'>
                <h1>Flight Number:</h1>
                <input placeholder='152'></input>
                <button><i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
        )
    }
}

export default FlightStatus;