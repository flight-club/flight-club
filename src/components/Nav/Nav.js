import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <div className='nav--left'>
                    <div className='logo'>
                        <h1>ALPHA</h1>
                        <i class="far fa-paper-plane"></i>
                    </div>

                    <div className='page-links'>
                        <p>BOOK</p>
                        <p>CHECK-IN</p>
                        <p>FLIGHT STATUS</p>
                    </div>
                </div>

                <div className='nav--right'>
                    <Link to='/auth/signup' style={{textDecoration:'none'}}><button id='sign-up'>SIGN UP</button></Link>
                    <Link to='/auth/login'><button id='log-in'>LOG IN</button></Link>
                </div>
            </div>
        )
    }
}

export default Nav;