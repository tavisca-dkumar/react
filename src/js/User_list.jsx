import React from 'react';
import ReactDom from 'react-dom';
class User_list extends React.Component{
	render(){
	
		return (
			<div>
			{
				this.props.list.map(
					(item,index) => {
						return (<button className="button" key={index}
							onClick={()=>this.props.onSelected(index)}>
							{`${item.firstName} ${item.lastName}`}
						</button>);
					}
				)
			}
			</div>
		);
	}

}
module.exports=User_list;