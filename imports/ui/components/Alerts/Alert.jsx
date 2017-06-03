import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';


export default class Alert extends Component{
  render(){
    const alertMessage = this.props.content;
    if(this.props.type.toLowerCase() === "error"){
      return(
        <div className="alert alert-danger" role="alert">
          <strong>Error!</strong> {alertMessage}
        </div>
      );
    }
    else if(this.props.type.toLowerCase() === "success"){
      return (
        <div role="alert" className="alert alert-success">
          <strong>Success!</strong> {alertMessage}
        </div>
      );
    }

  }
}
