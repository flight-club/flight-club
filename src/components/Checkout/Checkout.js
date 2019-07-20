import React, {Component} from 'react';

class Checkout extends Component {
    render() {
        return (
            <div className='full-payment'>
                <div className='payment-container'>
                    <h3>Trip & Price Details</h3>
                    <div className='top-bar'>
                        <i class="fas fa-plane"></i>
                        <h2>Flight</h2>
                    </div>

                <div className='full-review-container'>
                    <div className='review-container'>
                        <div className='departing-date'>
                            <h2>Departing</h2>
                            <h3>7/25/19</h3>
                        </div>

                        <div className='flight-details'>
                            <div className='flight-details--left'>
                                <div className='plane-circle'>
                                    <i class="fas fa-plane"></i>
                                </div>

                                <div className='blue-line'></div>

                                <div className='plane-circle'>
                                    <i class="fas fa-plane"></i>
                                </div>
                            </div>

                            <div className='flight-details--middle'>
                                <h4>DEPARTS</h4>
                                <h4>ARRIVES</h4>
                            </div>

                            <div className='flight-details--right'>
                                <div className='top'>
                                    <div className='top--time'>
                                        <h1>9:00</h1>
                                        <p>AM</p>
                                    </div>
                                    <h1>DAL</h1>

                                    <div>
                                        <div>
                                            <h3>FLIGHT</h3>
                                        </div>

                                        <div className='icons'>
                                            <h2>1310</h2>
                                            <i class="fas fa-wifi"></i>
                                            <h4>+</h4>
                                            <i class="fas fa-tv"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className='middle'>
                                    <h3>Nonstop</h3>
                                    <div className='line'></div>
                                </div>

                                <div className='bottom'>
                                        <div className='bottom--time'>
                                                <h1>10:05</h1>
                                                <p>AM</p>
                                        </div>
                                            
                                            <h1>TUL</h1>

                                        <div className='travel-time'>
                                            <div>
                                                <h3>TRAVEL TIME</h3>
                                            </div>

                                            <div className='duration'>
                                                <h2>1hr 5min</h2>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='passenger-info-container'>

                    </div>

                    <div className='payment-info-container'>

                    </div>

                    <div className='review-container-right'>
                        <div className='cabin-price'>
                            <h2>Main Cabin</h2>
                            <h2>$200.63</h2>
                        </div>

                        <div className='subtotal'>
                            <h3>SUBTOTAL</h3>
                            <h2>$200.63</h2>
                        </div>
                    </div>
                </div>


                <div className='full-review-container'>
                    <div className='review-container'>
                        <div className='departing-date'>
                            <h2>Returning</h2>
                            <h3>7/30/19</h3>
                        </div>

                        <div className='flight-details'>
                            <div className='flight-details--left'>
                                <div className='returning-plane-circles'>
                                    <i class="fas fa-plane"></i>
                                </div>

                                <div className='blue-line'></div>

                                <div className='returning-plane-circles'>
                                    <i class="fas fa-plane"></i>
                                </div>
                            </div>

                            <div className='flight-details--middle'>
                                <h4>DEPARTS</h4>
                                <h4>ARRIVES</h4>
                            </div>

                            <div className='flight-details--right'>
                                <div className='top'>
                                    <div className='top--time'>
                                        <h1>5:35</h1>
                                        <p>AM</p>
                                    </div>
                                    <h1>TUL</h1>

                                    <div>
                                        <div>
                                            <h3>FLIGHT</h3>
                                        </div>

                                        <div className='icons'>
                                            <h2>568</h2>
                                            <i class="fas fa-wifi"></i>
                                            <h4>+</h4>
                                            <i class="fas fa-tv"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className='middle'>
                                    <h3>Nonstop</h3>
                                    <div className='line'></div>
                                </div>

                                <div className='return-bottom'>
                                        <div className='bottom--time'>
                                                <h1>6:35</h1>
                                                <p>AM</p>
                                        </div>
                                            
                                            <h1>DAL</h1>

                                        <div className='travel-time'>
                                            <div>
                                                <h3>TRAVEL TIME</h3>
                                            </div>

                                            <div className='duration'>
                                                <h2>1hr 5min</h2>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='passenger-info-container'>

                    </div>

                    <div className='payment-info-container'>

                    </div>

                    <div className='review-container-right'>
                        <div className='cabin-price'>
                            <h2>Main Cabin</h2>
                            <h2>$105.75</h2>
                        </div>

                        <div className='subtotal'>
                            <h3>SUBTOTAL</h3>
                            <h2>$105.75</h2>
                        </div>
                    </div>
                </div>

                <div className='flight-total'>
                    <h2>Flight Total:</h2>
                    <h1>$368.75</h1>
                </div>
            </div>

        </div>
        )
    }
}

export default Checkout;