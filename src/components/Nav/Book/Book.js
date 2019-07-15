import React, {Component} from 'react';
import { Input } from 'reactstrap';
// import { arrowRenderer } from 'bootstrap';

class Book extends Component {
    constructor() {
        super();
        this.state = {
            classes: ''
        }
    }

    // arrowRenderer() {
    //     return <div className={arrowRenderer}><i class="fas fa-chevron-down"></i></div>
    // }
    
    render() {
        const {classes} = this.state;

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

                    <div>
                        <Input className='trip-type' type='select' arrowRenderer={this.arrowRenderer}>
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