import React, {Component} from 'react';
import axios from 'axios';
import queryString from 'query-string'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            origin: '',
            destination: '',
            tripType: '',
            startDate: '',
            returnDate: '',
            passengers: ''
        }
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)

        axios
        .get(`/results?origin=${values.origin}&destination=${values.destination}&departure=${values.departure}&return=${values.return}`)
        .then(( results ) => {
            console.log(results.data.PricedItineraries)
            this.setState(() => ({ results: results.data.PricedItineraries }));
          });
    }



    render() {
        console.log(this.state.results)
        return (
            <div>
            {/* < Book /> */}
            <h1>Results</h1>
            </div>
        )
    }
}

export default Results;