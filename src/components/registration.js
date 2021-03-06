import React, { Component } from 'react';
import '../App.css';
import * as firebase from 'firebase'

class Registration extends Component {
  constructor() {
    super();
    this.state = {
    	player1: null,
    	player2: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.savedata = this.savedata.bind(this)    
  	self = this
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state)   
  } 

  savedata(){
  	firebase.database().ref().child('players').child('player1').set({
  		name: this.state.player1	
  	});
  	firebase.database().ref().child('players').child('player2').set({
  		name: this.state.player2
  	});
  	this.setActive()
  }

  setActive(){
  	this.props.setvisible()
  }

  render() {
    return (
      <div className="App">
         <form className="callout">
         	<h2>Players Name</h2>
         	<p>
	       	 <label for="">Player 1 </label> <input type="text" name="player1" placeholder="name" onChange={this.handleChange}/> < br />
	       	</p>
	       	<p>
	       	 <label for="">Player 2 </label> <input type="text" name="player2" placeholder="name" onChange={this.handleChange}/> < br />
	       	</p>
	       	<p>
	         <button type="button" className="button expanded" onClick={this.savedata}>Send</button>
	        </p>
        </form>
      </div>
    );
  }
}

export default Registration;
