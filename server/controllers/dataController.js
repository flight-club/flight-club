const axios = require('axios');
const { TOKEN_2 } = process.env

var config = {
    headers: {
        'Authorization': "Bearer " + TOKEN_2,
        'Content-Type': 'application/json'
    },
    // params: {

    // }
};

const token = []

var bodyParameters = {
   key: "value"
}
const auth = axios({
            method: 'POST',
            url: 'https://api-crt.cert.havail.sabre.com/v2/auth/token',
            data: 'grant_type=client_credentials',
            headers: {
                'Authorization': "Basic " + 'VmpFNmRXTmlkakY0Ym10M00zZzFaREY2TURwRVJWWkRSVTVVUlZJNlJWaFU6VjAwd05rdGhabUk9',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then((res) => token.push(res.data.access_token)).catch(e => console.log(e.response))




getResults = (req, res) => {
    console.log('hit')
    axios({
        method: 'GET',
        url: `https://api-crt.cert.havail.sabre.com/v1/shop/flights?origin=${req.query.origin}&destination=${req.query.destination}&departuredate=${req.query.departure}&returndate=${req.query.return}&pointofsalecountry=US`,
        data: 'grant_type=client_credentials',
        headers: {
            'Authorization': "Bearer " + `${token[0]}`,
            'Content-Type': 'application/json'
        },
    }).then((response) => {
        let filteredFlights = []
        let results = response.data.PricedItineraries
        // console.log(results)
        for(let i = 0; i < results.length; i++) {
            let index = filteredFlights.findIndex(obj => obj.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber === results[i].AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber)
            // console.log(index)
            if(index === -1){
                filteredFlights.push(results[i])
            }

        }
        res.send(filteredFlights)
    }
    ).catch(e => res.send(e))
}

// const getResults = (req, res) => {
//     console.log(req.query)
//     axios.get(`https://api-crt.cert.havail.sabre.com/v1/shop/flights?origin=${req.query.origin}&destination=${req.query.destination}&departuredate=${req.query.departure}&returndate=${req.query.return}&pointofsalecountry=US`, bodyParameters, config )
//     .then(response => {
//         res.status(200).json(response.data)
//     })
//     .catch(err => console.log(err))
// }

module.exports = {
    getResults
}