import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import Modal from '/imports/ui/components/Alerts/Modal.jsx';


export default class Navigation extends Component {
  constructor(){
    super();
    this.state = {
      errors:[],
    };
  }

  logUserOut(event){
    event.preventDefault();
    const thisTmp = this;
    let message = "";
    if(!Meteor.userId()){
      throw new Meteor.Error('not-logged-in', 'User has to be logged in to logout');
    }
    Meteor.logout(err => {
      if(err){
        message = err.reason || "Unknown error";
        thisTmp.setState({
          errors: [message]
        });
      }
      else {
        console.log("Logout Successful.");
      }
    });

  }

  handleSearch(event){
    event.preventDefault();
  }

  render() {
    const pageTitle = "Home";//this.props.pageTitle;
    return (
      <div className="container-fluid">
        <div className="row fixed-top text-white bg-purple align-items-center" id="nav-header">
          <div className="col-xs-2 visible-xs-block h-100">
            <button type="button" className="btn button-purple text-center border-0 w-100 h-100" id="menu-xs-button">
              <i aria-hidden="true" className="fa fa-bars md-icon"></i>
            </button>
          </div>
          <div className="col-xs-8 visible-xs-block text-center title-xs">{pageTitle}</div>
          <div className="col-xs-2 visible-xs-block h-100">
            <button type="button" className="btn button-purple text-center border-0 w-100 h-100" id="search-xs-button">
              <i aria-hidden="true" className="fa fa-search md-icon"></i>
            </button>
          </div>
        </div>

        <div id="row" className="row fixed-bottom bg-purple align-items-center visible-xs text-white" id="nav-footer">
          <div className="col-xs-3 visible-xs-block h-100">
            <button type="button" className="btn text-center button-purple border-0 w-100 h-100">
              <i aria-hidden="true" className="fa fa-home md-icon"></i>
            </button>
          </div>
          <div className="col-xs-6 visible-xs-block h-100">
            <button type="button" className="btn text-center button-purple border-0 w-100 h-100">
              <i aria-hidden="true" className="fa fa-star md-icon"></i>
            </button>
          </div>
          <div className="col-xs-3 visible-xs-block h-100">
            <button type="button" className="btn text-center button-purple border-0 w-100 h-100">
              <i aria-hidden="true" className="fa fa-check md-icon"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
