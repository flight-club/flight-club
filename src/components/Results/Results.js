import React, {Component} from 'react';
import axios from 'axios';
import queryString from 'query-string'
import Checkout from '../Checkout/Checkout';

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
            returnTicketCost: ""
        };
    }

   componentDidMount() {
        const values = queryString.parse(this.props.location.search)

        axios
        .get(`/results?origin=${values.origin}&destination=${values.destination}&departure=${values.departure}&return=${values.return}`)
        .then(( results ) => {
           
            this.setState({ results: results.data });
          });
    }

    // changeTime(time) {
    //         //var time = "12:23:39";
    //         var time = time.split(':');
    //         var hours = time[0];
    //         var minutes = time[1];
    //         var seconds = time[2];
    //         $scope.timeValue = "" + ((hours >12) ? hours -12 :hours);
    //         $scope.timeValue += (minutes < 10) ? ":0" : ":" + minutes;
    //         $scope.timeValue += (seconds < 10) ? ":0" : ":" + seconds;
    //         $scope.timeValue += (hours >= 12) ? " P.M." : " A.M.";
    //         //console.log( timeValue);
    // }


    changeDate = (str) => {
        let newStr = str.split('')
        newStr.splice(0, 12)
        let mins = newStr.join('')

        return mins
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
            ticketCost: flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount})
    }

    departureFirstClass = (flight) => {
        this.setState({flightNumber: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber,
            departureCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureAirport.LocationCode,
            departureTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime, 
            arrivalCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalAirport.LocationCode, 
            arrivalTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalDateTime, 
            duration: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ElapsedTime, 
            aircraftType: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].Equipment.AirEquipType,
            ticketCost: flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount * 1.99})
    }

    returnMainCabin = (flight) => {
        this.setState({flightNumber: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].FlightNumber,
            departureCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureAirport.LocationCode,
            departureTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureDateTime, 
            arrivalCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalAirport.LocationCode, 
            arrivalTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalDateTime, 
            duration: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ElapsedTime, 
            aircraftType: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].Equipment.AirEquipType,
            ticketCost: flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount})
    }

    returnFirstClass = (flight) => {
        this.setState({flightNumber: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].FlightNumber,
            departureCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureAirport.LocationCode,
            departureTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureDateTime, 
            arrivalCity: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalAirport.LocationCode, 
            arrivalTime: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalDateTime, 
            duration: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ElapsedTime, 
            aircraftType: flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].Equipment.AirEquipType,
            ticketCost: flight.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount * 1.99})
    }

    addToCheckout = (flight) => {
        axios
        .get('/api/checkout', {flight})
        .then(res => {
            console.log(res.data.flight)
        })
    }
    

    render() {
        console.log(this.state)
        const values = queryString.parse(this.props.location.search)
   
            const {results} = this.state
           
    
            return (
                <div>
                <div className="flight-results">
                    <div className='top-bar'>
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

                        {results.map((flight, index) =>
                            (

                                <div className='flight-container' key={flight.id}>

                                    <div className='flight-left'>
                                        <div className='flight-left--one'>
                                            <h3 className="departurecity">{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureAirport.LocationCode}</h3>

                                            <h3 className="arrivalcity">{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalAirport.LocationCode}</h3>
                                        </div>

                                        <div className='flight-left--two'>
                                            <h3 className="departuretime">{this.changeDate(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime)}</h3>

                                            <i class="fas fa-arrow-right"></i>

                                            <h3 className="arrivaltime">{this.changeDate(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalDateTime)}</h3>

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
                            ))}
                    </div>

<div className="flight-results">
<div className='top-bar'>
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

    {results.map((flight, index) =>
        (

            <div className='flight-container' key={flight.id}>

                <div className='flight-left'>
                    <div className='flight-left--one'>
                        <h3 className="returnDeparturecity">{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureAirport.LocationCode}</h3>

                        <h3 className="returnArrivalcity">{flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalAirport.LocationCode}</h3>
                    </div>

                    <div className='flight-left--two'>
                        <h3 className="returnDeparturetime">{this.changeDate(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureDateTime)}</h3>

                        <i class="fas fa-arrow-right"></i>

                        <h3 className="returnArrivaltime">{this.changeDate(flight.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].ArrivalDateTime)}</h3>

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

                

        ))}
</div>

<div>
    <button onClick={(flight) => this.addToCheckout(flight)}>Book Flight!</button>
</div>

</div>
                
                    
        )
    }
}

export default Results;