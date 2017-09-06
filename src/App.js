import React from 'react';
class App extends React.Component{
	constructor(){
		super();
		this.state={
			name:"this is start text",
			number:"0"
		}
	}
	updateText(e){
		this.setState({name: e.target.value})
	}
    render(){
	    return(	 
		       <div>
			      <input type="text" onChange={this.updateText.bind(this)} />
			      <h1>{this.state.name} - {this.state.number}</h1>
			   </div>
        )
	}
} 

export default App