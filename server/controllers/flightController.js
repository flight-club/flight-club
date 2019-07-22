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
    }
}
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripeSecretKey);

const postStripeCharges = res => stripeRes => {
  res.status(200).json({ success: stripeRes });
};


module.export = postStripeCharges