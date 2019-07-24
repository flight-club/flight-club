import React, {Component} from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';
import {connect} from 'react-redux'
import {getMember} from '../../redux/reducer'
import {Link} from 'react-router-dom'

class Checkout extends Component {
    constructor(props) {
        super(props)
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
            returnCabin: "",
            cardType: '',
            cardNumber: '',
            expirationMonth: '',
            expirationYear: '',
            CVV: '',
            cardFirstName: '',
            cardLastName: '', 
            confirmation: '',
            memberId: 'null', 
            miles: '',
            returnMiles: '',
            totalMiles: ''
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
        let endTime = (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) ? (+militaryTime[0] - 12) + ':' + militaryTime[1] + ' PM' : militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) == 2 ? militaryTime[0] + ':' + militaryTime[1] + ' PM' : militaryTime[0].charAt(0) == 0 && militaryTime[0].charAt(1) == 0 ? 12 + ':' + militaryTime[1] + ' AM' : militaryTime.join(':') + ' AM'
      
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

    getConfirmation = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.setState({confirmation: result});
    }

    componentDidMount() {
        this.props.getMember()
        this.getMemberId()
        this.getYears()
        this.getConfirmation(6)
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
                returnCabin: res.data[0].returnCabin,
                miles: res.data[0].duration,
                returnMiles: res.data[0].returnDuration})
        })
    }

    getMemberId = () => {
        this.setState({memberId: this.props.member.id})
    }

    purchase = (e) => {
        e.preventDefault()
        const {
        memberId,
        flightNumber,
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
        totalCost,
        cabin,
        returnCabin,
        cardType,
        cardNumber,
        expirationMonth,
        expirationYear,
        CVV,
        cardFirstName,
        cardLastName, 
        confirmation,
        miles,
        returnMiles,
        totalMiles} = this.state

        axios
        .post('/api/purchase', {
            memberId: memberId,
            flightNumber: flightNumber,
            departureCity: departureCity,
            departureTime: departureTime,
            arrivalCity: arrivalCity,
            arrivalTime: arrivalTime,
            duration: duration,
            aircraftType: aircraftType,
            ticketCost: ticketCost,
            returnFlightNumber: returnFlightNumber,
            returnDepartureCity: returnDepartureCity,
            returnDepartureTime: returnDepartureTime,
            returnArrivalCity: returnArrivalCity,
            returnArrivalTime: returnArrivalTime,
            returnDuration: returnDuration,
            returnAircraftType: returnAircraftType,
            returnTicketCost: returnTicketCost,
            totalCost: totalCost,
            cabin: cabin,
            returnCabin: returnCabin,
            cardType: cardType,
            cardNumber: cardNumber,
            expirationMonth: expirationMonth,
            expirationYear: expirationYear,
            CVV: CVV,
            cardFirstName: cardFirstName,
            cardLastName: cardLastName, 
            confirmation: confirmation,
            miles: miles,
            returnMiles: returnMiles,
            totalMiles: totalMiles})
            .then(res => {console.log(res.data)})
            .then(() => {alert(`Thank you for flying with Alpha! Your confirmation code is ${confirmation}`)})
            .catch(() => {alert('Please complete form to purchase')})
    }

    render() {
        console.log(this.state)
        console.log(this.props)

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
                                    <option value="" disabled selected hidden>Please Choose</option> 
                                    <option>Female</option>
                                    <option>Male</option>
                                </Input>
                            </div>

                            <div>
                                <h3>DATE OF BIRTH</h3>
                                    <div className='DOB'>
                                        <Input type='select' value={this.state.DOBmonth} onChange={this.handleChange}>
                                            <option value="" disabled selected hidden>Month</option>
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
                                            <option value="" disabled selected hidden>Day</option>
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
                                            <option value="" disabled selected hidden>Year</option>
                                            {this.state.yearList.map((year, index) => (
                                                    
                                                    <option>{year}</option>
                                                ))}
                                        </Input>
                            </div>
                        </div>
                    </div>

                    <h2>Payment Method</h2>

                        <div className='passenger-info--row'>
                    
                            <div>
                                <div className='card-info'>
                                        <div>
                                            <h3>CARD TYPE</h3>
                                            <Input className='card-type' name='cardType' type='select' value={this.state.cardType} onChange={this.handleChange}>
                                                <option value=""disabled selected hidden>Please Choose</option>
                                                <option>Alpha Miles Visa Rewards</option>
                                                <option>Visa</option>
                                                <option>Mastervard</option>
                                                <option>Discover</option>
                                                <option>American Express</option>
                                            </Input>
                                        </div>

                                        <div>
                                            <h3>CREDIT/DEBIT CARD #</h3>
                                            <input name='cardNumber' value={this.state.cardNumber} onChange={this.handleChange} />
                                        </div>

                                        <div>
                                            <h3>EXPIRATION MONTH</h3>
                                            <Input type='select' className='expiration-month' name='expirationMonth' value={this.state.expirationMonth} onChange={this.handleChange}>
                                                        <option value="" disabled selected hidden>Month</option>
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
                                        </div>

                                        <div className='short-input'>
                                            <h3>YEAR</h3>
                                            <Input type='select' name='expirationYear' value={this.state.expirationYear} onChange={this.handleChange}>
                                                        <option value="" disabled selected hidden>Year</option>
                                                        <option>2019</option>
                                                        <option>2020</option>
                                                        <option>2021</option>
                                                        <option>2022</option>
                                                        <option>2023</option>
                                                        <option>2024</option>
                                                        <option>2025</option>
                                                        <option>2026</option>
                                                        
                                            </Input>
                                        </div>

                                        <div className='short-input'>
                                            <h3>CVV</h3>
                                            <input name='CVV' value={this.state.CVV} onChange={this.handleChange} />
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className='passenger-info--row'>
                            <div className='card-name-info'>
                                <div>
                                    <h3>FIRST NAME ON CARD</h3>
                                    <input name='cardFirstName' value={this.state.cardFirstName} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <h3>LAST NAME ON CARD</h3>
                                    <input name='cardLastName' value={this.state.cardLastName} onChange={this.handleChange} />
                                </div>

                            </div>
                        </div>


                        <div className='passenger-info--row--purchase'>
                            <button onClick={this.purchase}>PURCHASE</button>
                        </div>
                    </div>        
                
            </div>
            

        </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {member} = reduxState.reducer;
    return {
        member
    }
}

export default connect( mapStateToProps, {getMember})(Checkout);