import React from 'react';
import ReactDom from 'react-dom';
class User_data extends React.Component{

	changeFirstName(event){
		document.getElementById("fn").value=event.target.value;
	}
	
	render(){
		
		let firstname=this.props.list[this.props.selected].firstName;
		 let secondname=this.props.list[this.props.selected].lastName;
		return (<div className="section1">
							First Name<input type="text" id="fn" onClick={(event)=>this.changeFirstName(event)} value={firstname}></input>
							Last Name<input type="text"  id="ln" value={secondname}></input>
							 		
							<button onClick= {()=>this.props.onUpdated(this.props.selected,document.getElementById("fn").value,
							document.getElementById("ln").value)}>update</button>
				</div>)
	}
}
module.exports=User_data;