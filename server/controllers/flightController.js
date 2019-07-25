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

    purchase: async (req, res) => {
        console.log(req.body)
        const {
            flightNumber,
            departureCity,
            departureTime,
            arrivalCity,
            arrivalTime,
            duration,
            aircraftType,
            returnFlightNumber,
            returnDepartureCity,
            returnDepartureTime,
            returnArrivalCity,
            returnArrivalTime,
            returnDuration,
            returnAircraftType,
            returnTicketCost,
            ticketCost,
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
            memberId,
            miles,
            returnMiles} = req.body

        const purchase = await req.app.get('db').addFlightPurchase(
            flightNumber,
            departureCity,
            departureTime,
            arrivalCity,
            arrivalTime,
            duration,
            aircraftType,
            returnFlightNumber,
            returnDepartureCity,
            returnDepartureTime,
            returnArrivalCity,
            returnArrivalTime,
            returnDuration,
            returnAircraftType,
            returnTicketCost,
            ticketCost,
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
            memberId,
            miles,
            returnMiles
        )

        res.status(200).json(purchase)
    },

    getFlight: async (req, res) => {
        const db = req.app.get('db')
        let id = req.session.member

       const flight = await db.getFlight(id)
        res.status(200).send(flight)
    }
}



