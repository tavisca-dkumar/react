import React, {Component} from 'react';
import ReactDom from 'react-dom';
import User_list from './User_list.jsx';
import User_data from './User_data.jsx';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			selected:0,
			userDetails: [
				   {
					   firstName: "siva",
					   lastName: "dogga"
				   },
				   {
					   firstName: "naveen",
					   lastName: "bora"
				   },
				   {
					   firstName: "vijay",
					   lastName: "pocha"
				   }
			   ]
		   }
	}
	handleUpdated(itemId,fn,ln){
		let dummyUserDetails=this.state.userDetails;
		dummyUserDetails[itemId]={ "firstName":fn,"lastName":ln}
		this.setState({
			userDetails : dummyUserDetails
		});
	}

	handleSelected(itemId){
	    this.setState({
	    	selected: itemId
	    });
  	}

		render(){
		 return (<div>
					<User_list list={this.state.userDetails} onSelected={this.handleSelected.bind(this)}/>
					<User_data list={this.state.userDetails} selected={this.state.selected} onUpdated={this.handleUpdated.bind(this)}/>
			    </div>);
	}
}


ReactDom.render(<App/>,document.getElementById("content"));