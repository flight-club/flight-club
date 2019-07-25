import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFlight} from '../../../redux/flightReducer';

class Checkin extends Component {
    constructor(){
        super()
        this.state = {
            checkedIn: false
        }
    }


    handleClick = () => {
        this.setState({checkedIn: true})
    }

    render() {
        
        return (
            <div className='check-in'>
                {this.state.checkedIn === false ?
                <div>
                    <i class="fas fa-paper-plane"></i>
                    <div className='checkin-confirmation'>
                        <h1>Confirmation Number:</h1>
                        <input placeholder='SFT5RB'></input>
                        <input placeholder='Last Name'></input>
                        <button onClick={this.handleClick} ><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                    :

                    <h1> You are now checked in!
                    Thanks for choosing Alpha!
                    </h1>
                    }
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

export default connect( mapStateToProps, {getFlight})(Checkin);