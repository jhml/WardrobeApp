import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

const style = {
  margin: 12,
};

class Welcome extends Component {

	handleSubmit(e) {
		e.preventDefault();
		
		if(document.getElementById("text-email").value === ''){
			alert("Email is required");
		}
		else {
			var emailVal = document.getElementById("text-email").value;
			sessionStorage.setItem('wardrobeEmail', emailVal);
		}
	}
	
  render() { 
	
    return (
      <div className="Welcome">
      	<br/><br/><br/><br/>
      	<form id="useremailform" onSubmit={this.handleSubmit.bind(this)}>
      	<Chip className="email-chip">Start by adding your email</Chip>
      	<br/><br/><br/>
      	<TextField
      		hintText="Email"
      		ref="email"
	      	id="text-email"/>
	      <RaisedButton value='Submit' type="submit" label="Start online wardrobe" primary={true} style={style} >
	      </RaisedButton> 
      </form>
      </div>
    );
  }
}

export default Welcome;
