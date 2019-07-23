import React, {Component} from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';



  

class Checkout extends Component {
    constructor() {
        super()
        this.state ={
            flight: {},
            yearList: [],
            flightNumber: "",
            departureCity: "",
            departureTime: "",
            arrivalCity: "",
            arrivalTime: "",
            duration: "",
            aircraftType: "",
            ticketCost: "",
            returnFlightNumber: "",
            returnDepartureCity: "",
            returnDepartureTime: "",
            returnArrivalCity: "",
            returnArrivalTime: "",
            returnDuration: "",
            returnAircraftType: "",
            returnTicketCost: "",
            totalCost: "",
            cabin: "",
            returnCabin: ""
        }
    }

    getYears() {
        let yearList = []

        for (let i = 2019; i >= 1919; i--) {
            yearList.push(i)
        }

        this.setState({yearList: yearList});
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    changeDate = (str) => {
        let newStr = str.split('')
        newStr.splice(0, 12)
        let mins = newStr.join('')

        return mins
    }

    changeTime = (time) => {
        let hours = parseInt(time.substring(11, 13))
        let mins = time.substring(14, 16)

        if (hours == '00') hours = 12;
        if (hours > '12') hours = hours - 12;

        return hours + ':' + mins
    }

    getAM = (time) => {
        let firstTime = time.split('')
        let middleTime = firstTime.splice(11, 5)
        let finalTime = middleTime.join('')
        let militaryTime = finalTime.split(':')
        let endTime = (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) ? (+militaryTime[0] - 12) + ':' + militaryTime[1] + ' PM' : militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) == 2 ? militaryTime[0] + ':' + militaryTime[1] + ' P.M.' : militaryTime[0].charAt(0) == 0 && militaryTime[0].charAt(1) == 0 ? 12 + ':' + militaryTime[1] + ' AM' : militaryTime.join(':') + ' AM'
      
        let splitFinal = endTime.split('')
      
        let splitMiddle = splitFinal.slice(1).slice(-2)
      
        let finalFinal = splitMiddle.join('')
      
        return finalFinal
    }

    getDateFormat = (date) => {
        let newDate = date.split('')
        let cutTime = newDate.splice(0, 10)
        let year = cutTime.splice(0, 4)
        let month = cutTime.splice(1, 2)
        let day = cutTime.splice(2, 2)
  
        let joinYear = year.join('')
        let joinMonth = month.join('')
        let joinDay = day.join('')
  
        return joinMonth + '-' + joinDay + '-' + joinYear
      }

    changeDuration = (minutes) => {
        var h = Math.floor(minutes / 60);
        var m = minutes % 60;
        h = h < 10 ? + h : h;
        m = m < 10 ? '0' + m : m;
        return h + 'h' + m + 'm';
    }

    getTotalCost = (cost1, cost2) => {
        let ticketCost = Number(cost1)
        let returnTicketCost = Number(cost2)

        let finalCost = ticketCost + returnTicketCost

        return parseFloat(finalCost).toFixed(2)
    }

    roundDecimals = (cost) => {
        let newCost = cost

        return parseFloat(newCost).toFixed(2)
    }

    componentDidMount() {
        this.getYears()
        axios
        .get('/api/checkout')
        .then(res => {
            console.log(res.data[0])
            this.setState({
                flightNumber: res.data[0].flightNumber,
                departureCity: res.data[0].departureCity,
                departureTime: res.data[0].departureTime,
                arrivalCity: res.data[0].arrivalCity,
                arrivalTime: res.data[0].arrivalTime,
                duration: res.data[0].duration,
                aircraftType: res.data[0].aircraftType,
                ticketCost: res.data[0].ticketCost,
                returnFlightNumber: res.data[0].returnFlightNumber,
                returnDepartureCity: res.data[0].returnDepartureCity,
                returnDepartureTime: res.data[0].returnDepartureTime,
                returnArrivalCity: res.data[0].returnArrivalCity,
                returnArrivalTime: res.data[0].returnArrivalTime,
                returnDuration: res.data[0].returnDuration,
                returnAircraftType: res.data[0].returnAircraftType,
                returnTicketCost: res.data[0].returnTicketCost, 
                cabin: res.data[0].cabin,
                returnCabin: res.data[0].returnCabin})
        })
    }

    render() {
        console.log(this.state)

        let {flightNumber,
            departureCity,
            departureTime,
            arrivalCity,
            arrivalTime,
            duration,
            aircraftType,
            ticketCost,
            returnFlightNumber,
            returnDepartureCity,
            returnDepartureTime,
            returnArrivalCity,
            returnArrivalTime,
            returnDuration,
            returnAircraftType,
            returnTicketCost,
            cabin,
            returnCabin} = this.state

        return (
            <div className='full-payment'>
                <div className='payment-container'>
                    <h3>Trip & Price Details</h3>
                    <div className='top-bar'>
                        <i class="fas fa-plane"></i>
                        <h2>Flight</h2>
                    </div>

                <div className='full-review-container'>
                    <div className='review-container'>
                        <div className='departing-date'>
                            <h2>Departing</h2>
                            <h3>{this.getDateFormat(departureTime)}</h3>
                        </div>

                        <div className='flight-details'>
                            <div className='flight-details--left'>
                                <div className='plane-circle'>
                                    <i class="fas fa-plane"></i>
                                </div>

                                <div className='blue-line'></div>

                                <div className='plane-circle'>
                                    <i class="fas fa-plane"></i>
                                </div>
                            </div>

                            <div className='flight-details--middle'>
                                <h4>DEPARTS</h4>
                                <h4>ARRIVES</h4>
                            </div>

                            <div className='flight-details--right'>
                                <div className='top'>
                                    <div className='top--time'>
                                        <h1>{this.changeTime(departureTime)}</h1>
                                        <p>{this.getAM(departureTime)}</p>
                                    </div>

                                    <div className='city'>
                                        <h1>{departureCity}</h1>
                                    </div>

                                    <div>
                                        <div>
                                            <h3>FLIGHT</h3>
                                        </div>

                                        <div className='icons'>
                                            <h2>{flightNumber}</h2>
                                            <i class="fas fa-wifi"></i>
                                            <h4>+</h4>
                                            <i class="fas fa-tv"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className='middle'>
                                    <h3>Nonstop</h3>
                                    <div className='line'></div>
                                </div>

                                <div className='bottom'>
                                        <div className='bottom--time'>
                                                <h1>{this.changeTime(arrivalTime)}</h1>
                                                <p>{this.getAM(arrivalTime)}</p>
                                        </div>
                                            
                                        <div className='city'>
                                            <h1>{arrivalCity}</h1>
                                        </div>

                                        <div className='travel-time'>
                                            <div>
                                                <h3>TRAVEL TIME</h3>
                                            </div>

                                            <div className='duration'>
                                                <h2>{this.changeDuration(duration)}</h2>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='passenger-info-container'>

                    </div>

                    <div className='payment-info-container'>

                    </div>

                    <div className='review-container-right'>
                        <div className='cabin-price'>
                            <h2>{cabin}</h2>
                            <h2>${this.roundDecimals(ticketCost)}</h2>
                        </div>

                        <div className='subtotal'>
                            <h3>SUBTOTAL</h3>
                            <h2>${this.roundDecimals(ticketCost)}</h2>
                        </div>
                    </div>
                </div>


                <div className='full-review-container'>
                    <div className='review-container'>
                        <div className='departing-date'>
                            <h2>Returning</h2>
                            <h3>{this.getDateFormat(returnArrivalTime)}</h3>
                        </div>

                        <div className='flight-details'>
                            <div className='flight-details--left'>
                                <div className='returning-plane-circles'>
                                    <i class="fas fa-plane"></i>
                                </div>

                                <div className='blue-line'></div>

                                <div className='returning-plane-circles'>
                                    <i class="fas fa-plane"></i>
                                </div>
                            </div>

                            <div className='flight-details--middle'>
                                <h4>DEPARTS</h4>
                                <h4>ARRIVES</h4>
                            </div>

                            <div className='flight-details--right'>
                                <div className='top'>
                                    <div className='top--time'>
                                        <h1>{this.changeTime(returnDepartureTime)}</h1>
                                        <p>{this.getAM(returnDepartureTime)}</p>
                                    </div>

                                    <div className='city'>
                                        <h1>{returnDepartureCity}</h1>
                                    </div>

                                    <div>
                                        <div>
                                            <h3>FLIGHT</h3>
                                        </div>

                                        <div className='icons'>
                                            <h2>{returnFlightNumber}</h2>
                                            <i class="fas fa-wifi"></i>
                                            <h4>+</h4>
                                            <i class="fas fa-tv"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className='middle'>
                                    <h3>Nonstop</h3>
                                    <div className='line'></div>
                                </div>

                                <div className='return-bottom'>
                                        <div className='bottom--time'>
                                                <h1>{this.changeTime(returnArrivalTime)}</h1>
                                                <p>{this.getAM(returnArrivalTime)}</p>
                                        </div>
                                        
                                        <div className='city'>
                                            <h1>{returnArrivalCity}</h1>
                                        </div>

                                        <div className='travel-time'>
                                            <div>
                                                <h3>TRAVEL TIME</h3>
                                            </div>

                                            <div className='duration'>
                                                <h2>{this.changeDuration(returnDuration)}</h2>
                                            </div>
                                        </div>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className='passenger-info-container'>

                    </div>

                    <div className='payment-info-container'>

                    </div>

                    <div className='review-container-right'>
                        <div className='cabin-price'>
                            <h2>{returnCabin}</h2>
                            <h2>${this.roundDecimals(returnTicketCost)}</h2>
                        </div>

                        <div className='subtotal'>
                            <h3>SUBTOTAL</h3>
                            <h2>${this.roundDecimals(returnTicketCost)}</h2>
                        </div>
                    </div>
                </div>

                <div className='flight-total'>
                    <h2>Flight Total:</h2>
                    <h1>${this.getTotalCost(ticketCost, returnTicketCost)}</h1>
                </div>




            <div className='passenger-info'>
                <h2>Who's flying?</h2>
                        <div className='passenger-info--row'>
                            <div>
                                <h3>FIRST NAME</h3>
                                <input name='first_name' value={this.state.first_name} onChange={this.handleChange} />
                            </div>

                            <div>
                                <h3>LAST NAME</h3>
                                <input name='last_name' value={this.state.last_name} onChange={this.handleChange} />
                            </div>

                            <div>
                                <h3>GENDER</h3>
                                <Input type='select' name='gender' value={this.state.gender} onChange={this.handleChange}> 
                                    <option>Female</option>
                                    <option>Male</option>
                                </Input>
                            </div>

                            <div>
                                <h3>DATE OF BIRTH</h3>
                                    <div className='DOB'>
                                        <Input type='select' value={this.state.DOBmonth} onChange={this.handleChange}>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </Input>

                                        <Input type='select' value={this.state.DOBday}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                            <option>31</option>
                                        </Input>

                                        <Input type='select' value={this.state.DOByear}>
                                            {this.state.yearList.map((year, index) => (
                                                    <option>{year}</option>
                                                ))}
                                        </Input>
                            </div>
                        </div>

                        <div className='passenger-info--row'>
                            <div>
                                
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
        )
    }
}

export default Checkout;