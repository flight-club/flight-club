import React, {Component} from 'react';
import Axios from 'axios';

class Results extends Component {
    constructor() {
        super();
        this.state = {
            flightInfo: []
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
   
        axios
        .get("/api/flightInfo")
        .then(response => {
            this.setState({
                flightInfo: response.data.flightInfo
            })
        })
    
}

    render() {
        
            const {flightInfo} = this.state
  console.log(this.state.flightInfo)
    
            return (
               
                <div className="flight-info-container">

                    <div>
                        <div className="chooseflights">Choose flights</div>
                        <div className="main-cabin">Main Cabin</div>
                        <div className="First-class">First Class</div>
                    </div>

                    {flightInfo.map((flight, index) =>
                        (

                            <div key={flight.id}>
                                <div>
                                <h3 className="flightnumber">{flight.number}</h3>
                                <h3 className="departurecity">{departure.city}</h3>
                                <h3 className="departuretime">{departure.time}</h3>
                                <h3 className="arrivalcity">{arrival.city}</h3>
                                <h3 className="arrivalcity">{arrival.time}</h3>
                                <p className="duration">{flight.duration}</p>
                                <p className="aircraft">{flight.aircraft.type}</p>
                                </div>
                                
                                <div>
                                    <button className="maincabin" onclick={() => this.addFlight(flight)}>
                                     {flight.ticket.main.cost}
                                   </button>
                                    </div>

                                <div>
                                <button className="firstcost"onclick={() => this.addFlight(flight)}>
                                {flight.ticket.first.cost}
                                </button>
                                </div>
                        ))}
                </div>
               



        )
    }
}



export default Results;