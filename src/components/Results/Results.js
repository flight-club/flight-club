import React, {Component} from 'react';

class Results extends Component {
    constructor() {
        super();
        this.state = {
            flightNumber: 0,
            departureCity:"",
            departureTime:"",
            arrivalCity: "",
            arrivalTime: "",
            duration: "",
            aircraftType: "",
            ticketCost: ""
        }
    }



    render() {
        return (
            <h1>Results</h1>
        )
    }
}

// const mapStateToProps = reduxState => {
//     const {member} = reduxState ;
//     return {
//         member
//     }
// }

// export default connect ( mapStateToProps, {getMember})

export default Results;