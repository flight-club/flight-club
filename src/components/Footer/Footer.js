import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
   render() {
       return (
            <div className='footer'>
                <div className="contact">
                <p>Contact Us</p>
                <p>Earn Miles</p>
                <p>Login Help</p>
                </div>

                <div className="container-contact">
                    <div className='footer-name'>
                        <h5>Alpha Airlines</h5>
                        <i class="far fa-paper-plane"></i>
                    </div>
                            <div className='social-icons'>
                                <SocialIcon url='https://www.instagram.com/instagram/' style={{ height: 25, width: 25 }} bgColor="white" />
                                <SocialIcon className='facebook' url='https://www.facebook.com/facebook/?brand_redir=726281677519881' style={{ height: 25, width: 25 }} bgColor="white"/>
                            </div>

                    <div className="copyright">&copy; 2019 ALPHA AIRLINES, Inc.</div>
                </div>

                    <div className="about">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>New Routes</p>
                    </div>

            </div>



       )
   }
}

export default Footer;