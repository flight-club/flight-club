import React, {Component} from 'react';

class Checkin extends Component {
    render() {
        return (
            <div className='check-in'>
                
                <i class="fas fa-paper-plane"></i>
                <div className='checkin-confirmation'>
                    <h1>Confirmation Number:</h1>
                    <input placeholder='SFT5RB'></input>
                    <input placeholder='Last Name'></input>
                    <button><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        )
    }
}

export default Checkin;