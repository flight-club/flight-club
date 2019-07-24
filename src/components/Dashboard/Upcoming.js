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
    componentDidUpdate(prevProps){
        if(prevProps.flight !== this.props.flight) {
            this.props.getFlight()
            console.log(prevProps.flight, this.props.flight)
        }

    }

    render() {
        

const {flight} = this.props;  
console.log(this.props.flight)


    return (
       flight ?
               <div className='upcoming' key={flight.index}>
                           <div className='upcoming-bottom'>
                               <div className='upcoming-top'>
                                   <div className='upcoming-top-title'>
                                       <h2>Upcoming Travel</h2>
                                   </div>
                                   {flight && flight.map((flight, index) => 
                                     { console.log(flight)
                                     return (<div className='upcoming-info'>
                                     <div className='next'>
                                         <h4>UP NEXT</h4>
                                         <h2>{flight.departure_time}</h2>
                                     </div>
               
                                     <div className='flight-info'>
                                         <div className='outbound'>
                                             <h4>Outbound</h4>
                                             
                                             <h2>{flight.departure_time}</h2>
                                         </div>
  
                                         <div>
                                             <h4>Departs</h4>
                                             <h1>{flight.departure_city}</h1>
                                             <div className='flight-time'>
                                                 <h3>{flight.departure_time}</h3>
                                                
                                             </div>
                                         </div>
  
                                         <i class="fas fa-plane"></i>
  
                                         <div className='arrival'>
                                             <h4>Arrives</h4>
                                             <h1>{flight.arrival_city}</h1>
                                             <div className='flight-time'>
                                                 <h3>{flight.arrival_time}</h3>
                                                
                                             </div>
                                         </div>
  
                                         <div className='upcoming-confirmation'>
                                             <h4>Confirmation #</h4>
                                             <h2>{flight.confirmation}</h2>
                                         </div>
                                     </div>
  
                                 </div>)}
                                  
                                   )
                                  
                                   }
                               </div>
                           </div>
                       </div>
                       :
                       <div>No Flight Details</div>
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
