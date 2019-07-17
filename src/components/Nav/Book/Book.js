import React, {Component} from 'react';
import { Input } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

                    <div className='input-type-dropdown'>
                        <Input type='select'>
                            <option>One Way</option>
                            <option>Round Trip</option>
                        </Input>
                    </div>

                    <div className='book'>
                        <Input className='calendar' type='date'/>
                    </div>

                    <div className='input-passenger-dropdown'>
                        <Input type='select'>
                            <option>1 Passenger</option>
                            <option>2 Passengers</option>
                            <option>3 Passengers</option>
                            <option>4 Passengers</option>
                        </Input>
                    </div>

                    <div className='search-button'>
                        <button><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;