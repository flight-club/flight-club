import React, {Component} from 'react';


class Info extends Component {
    render() {
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
                                        <h2>{this.props.member.DOBmonth} {this.props.member.DOBday}, {this.props.member.DOByear}</h2>
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
                                                    <h1>VISA</h1>
                                                </div>

                                                <div className='card--two'>
                                                    <p>1234 5678 1234 5678</p>
                                                </div>

                                                <div className='card--three'>
                                                    <div className='expiration'>
                                                        <h3>VALID</h3>
                                                        <h3>THRU</h3>
                                                    </div>
                                                    <p>12/20</p>
                                                </div>

                                                <div className='card--four'>
                                                    <p>MADISON THAMES</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Info;