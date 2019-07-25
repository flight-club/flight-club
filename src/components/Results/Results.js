import React, {Component} from 'react';
import axios from 'axios';
import queryString from 'query-string'
import Checkout from '../Checkout/Checkout';
import {Link} from 'react-router-dom'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
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
            cabin: "",
            returnCabin: "",
            destination: "",
            origin: ""
        };
    }
    

//     let filteredDestination = []
//     let results = response.data.values.destination
    
//     for(let i = 0; i < results.length; i++) {
//         let index = filteredDestination.findIndex(obj => obj.values.destination === results[i].)
        
//         if(index === true){
//             filteredDestination.push(results[i])
//         }
//     }
    
//     res.send(filteredFlights)
// }
// let destination = [arrivalCity]
// let destination = destination.filter(destination => if (values.destination === true) destination);

    componentDidMount() {
        this.getFlightInfo();
    }

    getFlightInfo(){
        const values = queryString.parse(this.props.location.search)
        axios
        .get(`/results?origin=${values.origin}&destination=${values.destination}&departure=${values.departure}&return=${values.return}`)
        .then(( results ) => { 
            this.setState({ results: results.data, destination: values.destination, origin: values.origin })
        })
        .catch((err) => console.log(err))
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


    changeDuration = (minutes) => {
        var h = Math.floor(minutes / 60);
        var m = minutes % 60;
        h = h < 10 ? + h : h;
        m = m < 10 ? '0' + m : m;
        return h + 'h' + m + 'm';
    }

    departureMainCabin = (flight) => {
        this.setState({flightNumber: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber,
            departureCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureAirport.LocationCode,
            departureTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime, 
            arrivalCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalAirport.LocationCode, 
            arrivalTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalDateTime, 
            duration: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ElapsedTime, 
            aircraftType: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].Equipment.AirEquipType,
            ticketCost: flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount,
            cabin: 'Main Cabin' })
    }

    departureFirstClass = (flight) => {
        this.setState({flightNumber: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber,
            departureCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureAirport.LocationCode,
            departureTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime, 
            arrivalCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalAirport.LocationCode, 
            arrivalTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalDateTime, 
            duration: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ElapsedTime, 
            aircraftType: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].Equipment.AirEquipType,
            ticketCost: flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount * 1.99,
            cabin: 'First Class'})
    }

    returnMainCabin = (flight) => {
        this.setState({returnFlightNumber: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].FlightNumber,
            returnDepartureCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureAirport.LocationCode,
            returnDepartureTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureDateTime, 
            returnArrivalCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalAirport.LocationCode, 
            returnArrivalTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalDateTime, 
            returnDuration: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ElapsedTime, 
            returnAircraftType: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].Equipment.AirEquipType,
            returnTicketCost: flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount,   
            returnCabin: 'Main Cabin'})
    }

    returnFirstClass = (flight) => {
        this.setState({returnFlightNumber: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].FlightNumber,
            returnDepartureCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureAirport.LocationCode,
            returnDepartureTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureDateTime, 
            returnArrivalCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalAirport.LocationCode, 
            returnArrivalTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalDateTime, 
            returnDuration: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ElapsedTime, 
            returnAircraftType: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].Equipment.AirEquipType,
            returnTicketCost: flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount * 1.99, 
            returnCabin: 'First Class'})
    }

    addToCheckout = (state) => {
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
        returnCabin } = state
        // console.log(state)
        
        axios
        .post('/api/checkout', {
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
            cabin,
            returnCabin})
        .then(res => {
            console.log(res.data)
        })
    }
    

    render() {
    const {results, destination, origin} = this.state
            console.log(this.state.results)
           
    
            return (
                !this.state.results ?
                    <div>
                        <h1>We're sorry, there are no flight results.</h1>
                    </div> 
                    :
                <div>
                    

                <div className="flight-flight">
                    <div className='results-top-bar'>
                        <div>
                            <h2>Choose flights</h2>
                        </div>

                        <div className='cabins'>
                            <div className="main-cabin">
                                <h3>Main Cabin</h3>
                            </div>
                            <div className="first-class">
                                <h3>First Class</h3>
                            </div>
                        </div>
                    </div>

                        {this.state.results && results.map((flight, index) =>
                            (   
                                  flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalAirport.LocationCode === destination ?                            
                                <div className='flight-container' key={flight.id}>                                  
                                    <div className='flight-left'>
                                        <div className='flight-left--one'>
                                            <h3 className="departurecity">{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureAirport.LocationCode}</h3>

                                            <h3 className="arrivalcity">{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalAirport.LocationCode}</h3>
                                        </div>

                                        <div className='flight-left--two'>
                                            <h3 className="departuretime">
                                            {/* {this.changeDate(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime)} */}
                                            <h1>{this.changeTime(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime)}
                                                {this.getAM(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime)}</h1>
                                           
                                            </h3>

                                            <i class="fas fa-arrow-right"></i>

                                            <h3 className="arrivaltime">
                                                   {/* {this.changeDate(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalDateTime)} */}
                                               <h1>{this.changeTime(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalDateTime)}
                                                {this.getAM(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalDateTime)}</h1>
                                            </h3>

                                            <p className="duration">{this.changeDuration(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ElapsedTime)}</p>

                                            <p>Nonstop</p>
                                        </div>

                                        <div className='flight-left--three'>
                                            <h3 className="flightnumber">AA#{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber}</h3>

                                            <i class="fas fa-square"></i>

                                            <p className="aircraft">{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].Equipment.AirEquipType}</p>

                                            <i class="fas fa-wifi"></i>

                                            <i class="fas fa-plug"></i>
                                        </div>
                                    </div>

                                    <div className='flight-right'>
                                        <button onClick={() => this.departureMainCabin(flight)} className='main-cabin'>${Math.round(flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount)}</button>
                                        <button onClick={() =>this.departureFirstClass(flight)}>${Math.round(flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount * 1.99)}</button>
                                        </div>  
                                    </div>
                                   
                                    :
                                    <div></div>
                            ))}   
                    </div>

         

<div className="flight-flight">
<div className='results-top-bar'>
    <div>
        <h2>Choose Return flights</h2>
    </div>

    <div className='cabins'>
        <div className="main-cabin">
            <h3>Main Cabin</h3>
        </div>
        <div className="first-class">
            <h3>First Class</h3>
        </div>
    </div>
</div>

    {this.state.results && results.map((flight, index) =>
        (

            flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalAirport.LocationCode === destination && flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalAirport.LocationCode === origin ? 

            <div className='flight-container' key={flight.id}>

                <div className='flight-left'>
                    <div className='flight-left--one'>
                        <h3 className="returnDeparturecity">{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureAirport.LocationCode}</h3>

                        <h3 className="returnArrivalcity">{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalAirport.LocationCode}</h3>
                    </div>

                    <div className='flight-left--two'>
                        <h3 className="returnDeparturetime">
                        {/* {this.changeDate(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureDateTime)} */}
                        <h1>{this.changeTime(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureDateTime)}
                            {this.getAM(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureDateTime)}</h1>
                        </h3>

                        <i class="fas fa-arrow-right"></i>

                        <h3 className="returnArrivaltime">
                        {/* {this.changeDate(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalDateTime)} */}
                        <h1>{this.changeTime(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalDateTime)}
                            {this.getAM(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalDateTime)}</h1>
                        </h3>

                        <p className="returnDuration">{this.changeDuration(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ElapsedTime)}</p>

                        <p>Nonstop</p>
                    </div>

                    <div className='flight-left--three'>
                        <h3 className="retunFlightnumber">AA#{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].FlightNumber}</h3>

                        <i class="fas fa-square"></i>

                        <p className="returnAircraft">{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].Equipment.AirEquipType}</p>

                        <i class="fas fa-wifi"></i>

                        <i class="fas fa-plug"></i>
                    </div>
                </div>

                <div className='flight-right'>
                    <button onClick={() => this.returnMainCabin(flight)} className='main-cabin'>${Math.round(flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount)}</button>
                    <button onClick={() => this.returnFirstClass(flight)}>${Math.round(flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount * 1.99)}</button>
                    </div>  
                </div>

            : 
            <div></div>
        ))}
            <div>
            <Link to='/checkout'><button className='purchase-button' onClick={() => this.addToCheckout(this.state)}>Book Flight!</button></Link> 
            </div>
</div>

       


</div>
                
                    
        )
    }
}

export default Results;