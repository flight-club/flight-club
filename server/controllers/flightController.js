module.exports = {
    addToCheckout: (req, res) => {
        console.log(req.body)
        req.session.flight =[]
        req.session.flight.push(req.body)
        console.log(req.session)
        res.status(200).send(req.session.flight)
    },

    getCheckout: (req, res) => {
        res.status(200).json(req.session.flight)
    },

    purchase: (req, res) => {
        const {confirmation, flightNumber, departureCity, departureTime, arrivalCity, arrivalTime, duration, aircraftType, returnFlightNumber, returnDepartureCity, returnDepartureTime, returnArrivalCity, returnArrivalTime, returnDuration, returnAircraftType, cabin, returnCabin, totalCost, cardType, cardNumber, expirationMonth, expirationYear, CVV, cardFirstName, cardLastName} = req.body

        const purchase = req.app.get('db').addFlightPurchase(confirmation, flightNumber, departureCity, departureTime, arrivalCity, arrivalTime, duration, aircraftType, returnFlightNumber, returnDepartureCity, returnDepartureTime, returnArrivalCity, returnArrivalTime, returnDuration, returnAircraftType, cabin, returnCabin, totalCost, cardType, cardNumber, expirationMonth, expirationYear, CVV, cardFirstName, cardLastName)

        res.status(200).json(purchase)
    }
}



