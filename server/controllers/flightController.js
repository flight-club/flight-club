module.exports = {
    addToCheckout: (req, res) => {
        console.log("hit")
        req.session.push(req.body)
        req.session.total += req.body.amount
        res.status(200).json(req.session.checkout)
    },
}