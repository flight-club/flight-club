import React, {Component} from 'react';
import axios from "axios";
import { Input } from 'reactstrap';
import {Redirect, Link } from  "react-router-dom";
import { generateKeyPairSync } from 'crypto';


class SignUp extends Component {
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
            address: "",
            address2: "",
            city: "",
            state: "",
            zip: '',
            phone: "",
            email: "",
            username: "",
            password: "",
            cardType: '',
            cardNumber: '',
            expirationMonth: '',
            expirationYear: '',
            CVV: '',
            cardFirstName: '',
            cardLastName: '',
            miles: 0,
            cardNumber:"",
            expirationMonth:"",
            expirationYear: "",
            CVV: "",
            cardFirstName: "",
            cardLastName: "",
            redirect: false
        }
        // this.signupMember = this.signupMember.bind(this)
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
    
    signupMember = (e) => {
        e.preventDefault()
        // console.log(this.state)
        axios.post('/register', { first_name: this.state.first_name, last_name: this.state.last_name, gender: this.state.gender, DOBmonth: this.state.DOBmonth, DOBday: this.state.DOBday, DOByear: this.state.DOByear,
            address: this.state.address, address2: this.state.address2, city: this.state.city, state: this.state.state, zip: this.state.zip, phone: this.state.phone,
            email: this.state.email, username: this.state.username, password: this.state.password, cardNumber: this.state.cardNumber, expirationMonth: this.state.expirationMonth, expirationYear: this.state.expirationYear,  CVV: this.state. CVV, cardFirstName: this.state.cardFirstName,  cardLastName: this.state. cardLastName, cardType: this.state.cardType })
        .then(() => this.setState({redirect: true})).catch((err) => alert(err, 'Username Taken'))
    }

    render() {
        if(this.state.redirect){
            alert("Please Log In")
            return<Redirect to="/auth/login" />
        }
        return (
            <div className='container'>
                <div className="signup-info-container">
                    <h1>Create Account</h1>

                        <div className='about'>
                            <div>
                                <h2>Tell us about yourself.</h2>
                                <h3>Make sure first, middle, and last name matches your government-issue ID.</h3>
                            </div>

                            <div className='about--row'>
                                <div>
                                    <h3>FIRST NAME</h3>
                                    <input name='first_name' value={this.state.first_name} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <h3>LAST NAME</h3>
                                    <input name='last_name' value={this.state.last_name} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className='about--row'>
                                <div>
                                    <h3>GENDER</h3>
                                    <input name='gender' value={this.state.gender} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <h3>DATE OF BIRTH</h3>
                                        <div className='DOB'>
                                            <Input type='select' name='DOBmonth' value={this.state.DOBmonth} onChange={this.handleChange}>
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

                                            <Input type='select' name='DOBday' value={this.state.DOBday} onChange={this.handleChange}>
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

                                            <Input type='select' name='DOByear' value={this.state.DOByear} onChange={this.handleChange}>
                                                {this.state.yearList.map((year, index) => (
                                                        <option>{year}</option>
                                                    ))}
                                            </Input>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className='about'>
                            <div>
                                <h2>How can we contact you?</h2>
                            </div>

                            <div className='about--row'>
                                <div>
                                    <h3>ADDRESS</h3>
                                    <input name='address' value={this.state.address} onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <h3>ADDRESS 2</h3>
                                    <input name='address2' value={this.state.address2} onChange={this.handleChange}/>
                                </div>
                            </div>

                            <div className='about--row'>
                                <div>
                                    <h3>CITY</h3>
                                    <input className='area' name='city' value={this.state.city} onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <h3>STATE</h3>
                                    <input className='area' name='state' value={this.state.state} onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <h3>Zip Code</h3>
                                    <input className='area' name='zip' value={this.state.zip} onChange={this.handleChange}/>
                                </div>
                            </div>

                            <div className='about--row'>
                                <div>
                                    <h3>PHONE</h3>
                                    <input name='phone' value={this.state.phone} onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <h3>EMAIL</h3>
                                    <input name='email' value={this.state.email} onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>

                        <div className='about'>
                            <div>
                                <h2>Keep a card on file.</h2>
                            </div>


                            <div className='card-row'>
                                <div>
                                    <h3>CARD TYPE</h3>
                                    <Input className='card-type' name='cardType' type='select' value={this.state.cardType} onChange={this.handleChange}>
                                        <option>Alpha Miles Visa Rewards</option>
                                        <option>Visa</option>
                                        <option>Mastercard</option>
                                        <option>Discover</option>
                                        <option>American Express</option>
                                    </Input>
                                </div>

                                <div>
                                    <h3>CREDIT/DEBIT CARD #</h3>
                                    <input name='cardNumber' value={this.state.cardNumber} onChange={this.handleChange} />
                                </div>

                            </div>

                            <div className='card-row'>
                                <div>
                                    <h3>EXPIRATION MONTH</h3>
                                    <Input type='select' className='expiration-month' name='expirationMonth' value={this.state.expirationMonth} onChange={this.handleChange}>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                                <option>04</option>
                                                <option>05</option>
                                                <option>06</option>
                                                <option>07</option>
                                                <option>08</option>
                                                <option>09</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                    </Input>
                                </div>

                                <div>
                                        <h3>YEAR</h3>
                                        <input className='short' name='expirationYear' value={this.state.expirationYear} onChange={this.handleChange} />
                                </div>

                                <div>
                                        <h3>CVV</h3>
                                        <input className='short' name='expirationYear' value={this.state.CVV} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className='card-row'>
                                <div>
                                    <h3>FIRST NAME ON CARD</h3>
                                    <input name='cardFirstName' value={this.state.cardFirstName} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <h3>LAST NAME ON CARD</h3>
                                    <input name='cardLastName' value={this.state.cardLastName} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className='about'>
                            <div>
                                <h2>Create your username and password.</h2>
                            </div>

                            <div className='about--row'>
                                <div>
                                    <h3>Username</h3>
                                    <input name='username' value={this.state.username} onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <h3>Password</h3>
                                    <input name='password' value={this.state.password} onChange={this.handleChange} type="password"/>
                                </div>

                            </div>
                                <div className='add-button'>
                                    <button className="signup-member" onClick={this.signupMember}>Create Account</button>
                                </div>
                        </div>
                    </div>
        </div>
        )
    }
}

export default SignUp;