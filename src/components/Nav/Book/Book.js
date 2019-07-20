import React, {Component} from 'react';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Results from '../../Results/Results';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';


class Book extends Component {
    constructor() {
        super();
        this.state = {
            origin: '',
            destination: '',
            tripType: '',
            startDate: '',
            returnDate: '',
            passengers: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    } 

    onChange = date => this.setState({ startDate: date })

    
    render() {
        console.log(this.state.startDate)
        return (
            <div className='book'>
                <div className='logo'>
                    <i class="fas fa-paper-plane"></i>
                </div>

                    <div className='fields'>
                        <div className='destination'>
                            <input placeholder='DFW' name='origin' value={this.state.origin} onChange={this.handleChange}></input>
                            <i class="fas fa-exchange-alt"></i>
                            <input placeholder='LAX' name='destination' value={this.state.destination} onChange={this.handleChange}></input>
                        </div>

                        <div className='input-type-dropdown'>
                            <Input type='select' name='tripType' value={this.state.tripType} onChange={this.handleChange}>
                                <option>One Way</option>
                                <option>Round Trip</option>
                            </Input>
                        </div>

                        <div>

                            {/* <DateRangePicker
                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                startDateId="07-21-2019" // PropTypes.string.isRequired,
                                endDate={this.state.returnDate} // momentPropTypes.momentObj or null,
                                endDateId="07-23-2019" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, returnDate }) => this.setState({ startDate, returnDate })} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                            /> */}

                            {/* <DatePicker 
                                onChange={this.onChange}
                                value={this.state.startDate}
                                dateFormat={"yyyy-MM-dd"}/> */}
                            <div className='book'>
                                <input className='calendar' name='startDate' value={this.state.startDate} onChange={this.handleChange}/>
                            </div>

                            <div className='book'>
                                <input className='calendar' name='returnDate' value={this.state.returnDate} onChange={this.handleChange}/>
                            </div>
                        </div>

                        <div className='input-passenger-dropdown'>
                            <Input type='select' name='passengers' value={this.state.passengers} onChange={this.handleChange}>
                                <option>1 Passenger</option>
                                <option>2 Passengers</option>
                                <option>3 Passengers</option>
                                <option>4 Passengers</option>
                            </Input>
                        </div>

                        <div className='search-button'>
                            <Link to={`/results/?origin=${this.state.origin}&destination=${this.state.destination}&departure=${this.state.startDate}&return=${this.state.returnDate}`}>
                                <button><i class="fas fa-arrow-right"></i></button>
                            </Link>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Book;