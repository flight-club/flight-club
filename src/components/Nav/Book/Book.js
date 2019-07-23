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

    getDateFormat = (date) => {
        let newDate = date.split('')
        let cutTime = newDate.splice(0, 10)
        let year = cutTime.splice(0, 4)
        let month = cutTime.splice(1, 2)
        let day = cutTime.splice(2, 2)
  
        let joinYear = year.join('')
        let joinMonth = month.join('')
        let joinDay = day.join('')
  
        return joinYear + '-' + joinDay + '-' + joinMonth
      }

    
    render() {
        console.log(this.state.returnDate)
        return (
            <div className='book'>
                <div className='logo'>
                    <i class="fas fa-paper-plane"></i>
                </div>

                    <div className='fields'>
                        <div className='destination'>
                            <div className='destination--box'>
                            <input list="airports" placeholder='DFW' name='origin' value={this.state.origin} onChange={this.handleChange}/>
                                    <datalist id="airports">
                                        <option value="ATL">Atlanta</option>
                                        <option value="BOS">Boston</option>
                                        <option value="CLT">Charlotte</option>
                                        <option value="ORD">Chicago</option>
                                        <option value="DFW">Dallas</option>
                                        <option value="DEN">Denver</option>
                                        <option value="FLL">Fort Lauderdale</option>
                                        <option value="IAH">Houston</option>
                                        <option value="LAS">Las Vegas</option>
                                        <option value="LAX">Los Angeles</option>
                                        <option value="MIA">Miami</option>
                                        <option value="JFK">New York City</option>
                                        <option value="MCO">Orlando</option>
                                        <option value="PHX">Phoenix</option>
                                        <option value="SAN">San Diego</option>
                                        <option value="SFO">San Francisco</option>
                                        <option value="SEA">Seattle</option>
                                        <option value="SLC">Salt Lake City</option>
                                        <option value="STL">St. Louis</option>
                                        <option value="DCA">Washington, DC</option>
                                    </datalist> 
                                    <p>Origin</p>
                                </div>
                            <i class="fas fa-exchange-alt"></i>

                            <div className='destination--box'>
                            <input list="airports" placeholder='LAX' name='destination' value={this.state.destination} onChange={this.handleChange}/>
                                <datalist id="airports">
                                    <option value="ATL">Atlanta</option>
                                    <option value="BOS">Boston</option>
                                    <option value="CLT">Charlotte</option>
                                    <option value="ORD">Chicago</option>
                                    <option value="DFW">Dallas</option>
                                    <option value="DEN">Denver</option>
                                    <option value="FLL">Fort Lauderdale</option>
                                    <option value="IAH">Houston</option>
                                    <option value="LAS">Las Vegas</option>
                                    <option value="LAX">Los Angeles</option>
                                    <option value="MIA">Miami</option>
                                    <option value="JFK">New York City</option>
                                    <option value="MCO">Orlando</option>
                                    <option value="PHX">Phoenix</option>
                                    <option value="SAN">San Diego</option>
                                    <option value="SFO">San Francisco</option>
                                    <option value="SEA">Seattle</option>
                                    <option value="SLC">Salt Lake City</option>
                                    <option value="STL">St. Louis</option>
                                    <option value="DCA">Washington, DC</option>
                                </datalist> 

                                <p>Destination</p>
                            </div>
                        </div>

                        <div className='input-type-dropdown'>
                            <Input type='select' name='tripType' value={this.state.tripType} onChange={this.handleChange}>
                                <option>One Way</option>
                                <option>Round Trip</option>
                            </Input>
                        </div>

                            {/* <div className='cal'>
                                <input placeholder='Depart' className='calendar' placeholder='Depart' type='date' name='startDate' value={this.getDateFormat(this.state.startDate)} onChange={this.handleChange} dateFormat={"yyyy-MM-dd"}></input>
                                <p>Depart</p>
                            </div> */}

                            {/* <div className='cal'>
                                <input placeholder='Return' type='date' name='returnDate' value={this.getDateFormat(this.state.returnDate)} onChange={this.handleChange} dateFormat={"yyyy-MM-dd"}></input>
                                <p>Return</p>
                            </div> */}

                            {/* <DateRangePicker
                                className='date-picker'
                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                startDateId="07-21-2019" // PropTypes.string.isRequired,
                                endDate={this.state.returnDate} // momentPropTypes.momentObj or null,
                                endDateId="07-23-2019" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, returnDate }) => this.setState({ startDate, returnDate })} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })}
                                 // PropTypes.func.isRequired,
                            /> */}

                            {/* {/* <DatePicker 
                                onChange={this.onChange}
                                value={this.state.startDate}
                                dateFormat={"yyyy-MM-dd"}/> */}

                            {/* <DatePicker 
                                className='datePicker'
                                onChange={this.onChange}
                                value={this.state.returnDate}
                                placeholder='Depart'/> */}

                            <div className='book'>
                                <input className='calendar' name='startDate' value={this.state.startDate} onChange={this.handleChange}/>
                            </div>

                            <div className='book'>
                                <input className='calendar' name='returnDate' value={this.state.returnDate} onChange={this.handleChange}/>
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