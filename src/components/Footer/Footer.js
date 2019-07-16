import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
   render() {
       return (
            <div className='footer'>
                <div>
                <p>Contact Us</p>
                </div>

                <div className="container-contact">
                    <div className='footer-name'>
                        <h5>Alpha Airlines</h5>
                        <i class="far fa-paper-plane"></i>
                    </div>
                            <div className='social-icons'>
                                <SocialIcon url='https://www.instagram.com/instagram/' style={{ height: 25, width: 25 }} bgColor="transparent" fgColor='white' />
                                <SocialIcon className='facebook' url='https://www.facebook.com/facebook/?brand_redir=726281677519881' style={{ height: 25, width: 25 }} bgColor="transparent" fgColor='white' border='solid white 1px'/>
                            </div>

                    <div className="copyright">&copy; 2019 ALPHA AIRLINES</div>
                </div>

                    <div>
                        <p>About</p>
                    </div>

            </div>



       )
   }
}

export default Footer;