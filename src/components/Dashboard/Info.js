import React, {Component} from 'react';


class Info extends Component {
    constructor() {
        super();
        this. state = {

        }
    }

    getFirst = (num) => {
        let first = num.substring(0, 4)

        return first
    }

    getSecond = (num) => {
        let second = num.substring(4, 8)

        return second
    }

    getThird = (num) => {
        let second = num.substring(8, 12)
        
        return second
    }

    getFourth = (num) => {
        let second = num.substring(12, 16)
        
        return second
    }

    render() {

        console.log(this.getSecond('1234123412341234'))

        console.log(this.props.member)
        return (
            <div className='info'>
                        <div className='info-bottom'>
                            <div className='edit'>
                                <button>EDIT</button>
                            </div>

                            <div className='personal-top'>
                                <div className='personal-top--title'>
                                    <h2>Profile Information</h2>
                                </div>

                                <div className='personal-info'>
                                    <div>
                                        <h4>FULL NAME</h4>
                                        <h2>{this.props.member.first_name} {this.props.member.last_name}</h2>
                                    </div>

                                    <div>
                                        <h4>GENDER</h4>
                                        <h2>{this.props.member.gender}</h2>
                                    </div>

                                    <div>
                                        <h4>DATE OF BIRTH</h4>
                                        <h2>{this.props.member.dob_month} {this.props.member.dob_day}, {this.props.member.dob_year}</h2>
                                    </div>
                                </div>

                                <div className='address'>
                                    <div>
                                        <h4>STREET ADDRESS</h4>
                                        <h2>{this.props.member.address}</h2>
                                        <h2>{this.props.member.city}, {this.props.member.state} {this.props.member.zip}</h2>
                                    </div>

                                    <div className='payment'>
                                        <h4>PAYMENT ON FILE</h4>

                                        <i class="fas fa-paper-plane"></i>

                                            <div className='card'>

                                                <div className='card--one'>
                                                    { this.props.member.card_type ?
                                                    <h1>{this.props.member.card_type}</h1> :
                                                    <h1>VISA</h1>
                                                    }
                                                </div>

                                                    {
                                                        this.props.member.card_number ?
                                                        <div className='card--two'>
                                                                                                                                                                                    <p>{this.getFirst(this.props.member.card_number)}</p>
                                                            <p>{this.getSecond(this.props.member.card_number)}</p>
                                                            <p>{this.getThird(this.props.member.card_number)}</p>
                                                            <p>{this.getFourth(this.props.member.card_number)}</p>
                                                        </div> :
                                                        <div className='card--two'>
                                                            <p>1234 1234 1234 1234</p>
                                                        </div>
                                                    }

                                                    { this.props.member.expiration_month && this.props.member.expiration_year ?

                                                        <div className='card--three'>
                                                            <div className='expiration'>
                                                                <h3>VALID</h3>
                                                                <h3>THRU</h3>
                                                            </div>
                                                            <p>{this.props.member.expiration_month}/{this.props.member.expiration_year}</p>
                                                        </div>

                                                        :

                                                        <div className='card--three'>
                                                            <div className='expiration'>
                                                                <h3>VALID</h3>
                                                                <h3>THRU</h3>
                                                            </div>
                                                            <p>12/21</p>
                                                        </div>

                                                    }

                                                    { this.props.member.card_first_name && this.props.member.card_last_name ?

                                                    <div className='card--four'>
                                                        <p>{this.props.member.card_first_name} {this.props.member.card_last_name}</p>
                                                    </div>

                                                        :

                                                    <div className='card--four'>
                                                        <p>Your Name</p>
                                                    </div>

                                                    }

                                            </div>
                                            {
                                                this.props.member.card_number ?
                                                <div></div>
                                                :
                                            <div className='add-card'>
                                                <h3>You do not have a card on file, to make booking easier click here.</h3>
                                            </div>
                                            }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Info;