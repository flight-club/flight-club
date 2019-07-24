import React, {Component} from 'react';
import { getFlight } from '../../redux/flightReducer';
import { connect } from 'react-redux';


class Upcoming extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            flights: []
        }
    }
        
    componentDidMount() {
        this.props.getFlight()
    }

    render() {

const {flight} = this.props.flight;  
console.log(this.props)


    return (
       
               <div className='upcoming' key={flight.index}>
                           <div className='upcoming-bottom'>
                               <div className='upcoming-top'>
                                   <div className='upcoming-top-title'>
                                       <h2>Upcoming Travel</h2>
                                   </div>
                                   {flight.map((flight, index) => 
                                     
                                   <div className='upcoming-info'>
                                       <div className='next'>
                                           <h4>UP NEXT</h4>
                                           <h2>July 27 - July 31</h2>
                                       </div>
                 
                                       <div className='flight-info'>
                                           <div className='outbound'>
                                               <h4>{flight.outbound}</h4>
                                               
                                               <h2>7/27</h2>
                                           </div>
    
                                           <div>
                                               <h4>{flight.departs}</h4>
                                               <h1>DAL</h1>
                                               <div className='flight-time'>reduxState
                                                   <h3>8:00</h3>
                                                   <h2>AM</h2>
                                               </div>
                                           </div>
    
                                           <i class="fas fa-plane"></i>
    
                                           <div className='arrival'>
                                               <h4>{flight.arrives}</h4>
                                               <h1>DEN</h1>
                                               <div className='flight-time'>
                                                   <h3>12:00</h3>
                                                   <h2>PM</h2>
                                               </div>
                                           </div>
    
                                           <div className='upcoming-confirmation'>
                                               <h4>#{flight.confirmation}</h4>
                                               <h2>HGURTY</h2>
                                           </div>
                                       </div>
    
                                   </div>
                                  
                                   )}}
                               </div>
                           </div>
                       </div>
    
     )
    
}
}
const mapStateToProps = reduxState => {
    
    const {flight} = reduxState.flightReducer;
    return {
        flight,
      
    }
}

export default connect( mapStateToProps, {getFlight})(Upcoming);
