import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Confirmation extends Component {
    constructor() {
        super();
        this.state = {
            confirmation: ''
        }
    }

    componentDidMount() {
        const { confirmation } = this.props.match.params
        this.setState({ confirmation: confirmation})
    }

    render() {
        return (
            <div className='confirmation'>
                <div className='confirmation-container'>
                    <h1>Thanks for flying with Alpha!</h1>

                    <div className='number'>
                        <h2>Your confirmation number is</h2>
                        <h3>{this.state.confirmation}</h3>
                    </div>

                    <Link to='/'>
                        <button>Back to Home</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Confirmation