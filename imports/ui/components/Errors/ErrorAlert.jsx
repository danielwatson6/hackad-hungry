import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';


export default class ErrorAlert extends Component{
  render(){
    return(
      <div className="alert alert-danger fade in" role="alert">
        <strong>Error!</strong> {this.props.error}
      </div>

    );
  }
}
