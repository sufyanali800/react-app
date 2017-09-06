import React from 'react';
import PropTypes from 'prop-types';

 class App extends React.Component{
    render(){
		let name= this.props.name
	    return(
		 
        	  <div>
		         <h1>Hello React</h1>
			     <p>{name}</p>
				 <p>{this.props.number}</p>
			  </div> 
        )
	}
} 
App.propType={
	name : React.PropTypes.string,
   number: React.PropTypes.number.isRequired
}
//if prop not exit then default values will be used 
App.defaultProps={
	number: "0"
}
//const App = () => <h1>Hello ReactJS....</h1>
 
export default App