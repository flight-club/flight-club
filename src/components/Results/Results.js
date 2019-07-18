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
    }

   componentDidMount() {
        const values = queryString.parse(this.props.location.search)

       

        axios
        .get(`/results?origin=${values.origin}&destination=${values.destination}&departure=${values.departure}&return=${values.return}`)
        .then(( results ) => {
           
            this.setState(() => ({ results: results.data.PricedItineraries }));
          });
    }


    render() 
    {
        
            const {results} = this.state
  console.log(this.state.results)
    
            return (
                <div className="flight-info-container">

                    <div>
                        <div className="choose-flights">Choose flights</div>
                        <div className="main-cabin">Main Cabin</div>
                        <div className="First-class">First Class</div>
                    </div>

                    {results.map((results, index) =>
                        (

                            <div key={results.id}>

                                <div>

                                <h3 className="flightnumber">{results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber}</h3>
                              
                                <h3 className="departurecity">{results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureAirport.
                                    LocationCode}</h3>
                                <h3 className="departuretime">{results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime}</h3>
                                <h3 className="arrivalcity">{results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalAirport.
                                    LocationCode}</h3>
                                <h3 className="arrivaltime">{results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ArrivalDateTime}</h3>
                                <p className="duration">{results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ElapsedTime}</p>
                                <p className="aircraft">{results.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].Equipment.AirEquipType}</p>
                                </div>
                                
                                <div>
                                    {/* <button className="maincabin" onclick={() => this.addResults(results)}>
                                     {results.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.FareBasisCodes.PassengerFare.TotalFare.Amount}   
                                   </button>
                                 </div>

                                <div>
                                <button className="firstclass"onclick={() => this.addResults(results)}>
                                {results.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.FareBasisCodes.PassengerFare.TotalFare.Amount * 2}
                                </button> */}
                                </div>
                                </div>
                                </div>
                        ))}

                </div>
                
                    
        )
    }
}

export default Results;