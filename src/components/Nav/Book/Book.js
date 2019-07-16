import React, {Component} from 'react';
import { Input } from 'reactstrap';

class Book extends Component {
    constructor() {
        super();
        this.state = {

        }

    }

    
    render() {
        return (
            <div className='book'>
                <div className='logo'>
                    <i class="fas fa-paper-plane"></i>
                </div>

                <div className='fields'>
                    <div className='destination'>
                        <input placeholder='DFW'></input>
                        <i class="fas fa-exchange-alt"></i>
                        <input placeholder='LAX'></input>
                    </div>

                    <div className='trip-type'>
                        <Input type='select'>
                            <option>One Way</option>
                            <option>Round Trip</option>
                        </Input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;