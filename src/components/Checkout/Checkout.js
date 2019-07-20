import React, {Component} from 'react';
import { Input } from 'reactstrap';

class Checkout extends Component {
    constructor(){
        super()
        this.state ={
            first_name: "",
            last_name: "",
            gender: "",
            DOBmonth: "",
            DOBday: "",
            DOByear: "",
            yearList: [],
        }
    }

    componentDidMount() {
        this.getYears()
    }

    getYears() {
        let yearList = []

        for (let i = 2019; i >= 1919; i--) {
            yearList.push(i)
        }

        this.setState({yearList: yearList});
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


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




            <div className='passenger-info'>
                <h2>Who's flying?</h2>
                        <div className='passenger-info--row'>
                            <div>
                                <h3>FIRST NAME</h3>
                                <input name='first_name' value={this.state.first_name} onChange={this.handleChange} />
                            </div>

                            <div>
                                <h3>LAST NAME</h3>
                                <input name='last_name' value={this.state.last_name} onChange={this.handleChange} />
                            </div>

                            <div>
                                <h3>GENDER</h3>
                                <Input type='select' name='gender' value={this.state.gender} onChange={this.handleChange}> 
                                    <option>Female</option>
                                    <option>Male</option>
                                </Input>
                            </div>

                            <div>
                                <h3>DATE OF BIRTH</h3>
                                    <div className='DOB'>
                                        <Input type='select' value={this.state.DOBmonth} onChange={this.handleChange}>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </Input>

                                        <Input type='select' value={this.state.DOBday}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                            <option>31</option>
                                        </Input>

                                        <Input type='select' value={this.state.DOByear}>
                                            {this.state.yearList.map((year, index) => (
                                                    <option>{year}</option>
                                                ))}
                                        </Input>
                            </div>
                        </div>

                        <div className='passenger-info--row'>
                            <div>
                                
                            </div>        
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}

export default Checkout;