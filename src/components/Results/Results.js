import React, {Component} from 'react';
import axios from 'axios';
import queryString from 'query-string'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            // flightNumber: "",
            // departureCity: "",
            // departureTime: "",
            // arrivalCity: "",
            // arrivalTime: "",
            // duration: "",
            // aircraftType: "",
            // ticketCost: "",
            // returnFlightNumber: "",
            // returnDepartureCity: "",
            // returnDepartureTime: "",
            // returnArrivalCity: "",
            // returnArrivalTime: "",
            // returnDuration: "",
            // returnAircraftType: "",
            // returnTicketCost: ""
        };

        this.changeDate = this.changeDate.bind(this);
        this.changeDuration = this.changeDuration.bind(this);
        // this.changeTime = this.changeTime.bind(this);
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


    changeDate(str) {
        let newStr = str.split('')
        newStr.splice(0, 12)
        let mins = newStr.join('')

        return mins
    }

    changeDuration(minutes) {
        var h = Math.floor(minutes / 60);
        var m = minutes % 60;
        h = h < 10 ? + h : h;
        m = m < 10 ? '0' + m : m;
        return h + 'h' + m + 'm';
      }


    render() {
        const values = queryString.parse(this.props.location.search)
        console.log(values)
            const {results} = this.state
            console.log(this.state.results)
    
            return (
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

                        {results.map((results, index) =>
                            (

                                <div className='results-container' key={results.id}>

                                    <div className='results-left'>
                                        <div className='results-left--one'>
                                            <h3 className="departurecity">{results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureAirport.LocationCode}</h3>

                                            <h3 className="arrivalcity">{results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalAirport.LocationCode}</h3>
                                        </div>

                                        <div className='results-left--two'>
                                            <h3 className="departuretime">{this.changeDate(results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime)}</h3>

                                            <i class="fas fa-arrow-right"></i>

                                            <h3 className="arrivaltime">{this.changeDate(results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalDateTime)}</h3>

                                            <p className="duration">{this.changeDuration(results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ElapsedTime)}</p>

                                            <p>Nonstop</p>
                                        </div>

                                        <div className='results-left--three'>
                                            <h3 className="flightnumber">AA#{results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber}</h3>

                                            <i class="fas fa-square"></i>

                                            <p className="aircraft">{results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].Equipment.AirEquipType}</p>

                                            <i class="fas fa-wifi"></i>

                                            <i class="fas fa-plug"></i>
                                        </div>
                                    </div>

                                    <div className='results-right'>
                                        <button className='main-cabin'>${Math.round(results.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount)}</button>
                                        <button>${Math.round(results.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount * 1.99)}</button>
                                        </div>  
                                    </div>
                            ))}
                    </div>

                
                
                    
        )
    }
}

export default Results;