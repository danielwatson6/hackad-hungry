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
        <div className="row fixed-top visible-xs-block text-white bg-purple align-items-center" id="nav-xs-header">
          {/* Top navigation bar for mobile tablets */}
          <div className="col-xs-2 visible-xs-block h-100">
            <button type="button" className="btn button-purple text-center border-0 w-100 h-100" id="menu-xs-button">
              <i aria-hidden="true" className="fa fa-bars md-icon"></i>
            </button>
          </div>
          <div className="col-xs-8 visible-xs-block text-center title-xs h-100 pt-4">{pageTitle}</div>
          <div className="col-xs-2 visible-xs-block h-100">
            <button type="button" className="btn button-purple text-center border-0 w-100 h-100" id="search-xs-button">
              <i aria-hidden="true" className="fa fa-search md-icon"></i>
            </button>
          </div>
        </div>
        {/* Bottom navigation bar for small mobile devices */}
        <div id="row" className="row fixed-bottom bg-purple align-items-center visible-xs text-white" id="nav-xs-footer">
          <div className="col-xs-3 visible-xs-block h-100">
            <button type="button" className="btn text-center button-purple border-0 w-100 h-100 active-button">
              <i aria-hidden="true" className="fa fa-home md-icon"></i>
              <p className="text-under-button">Home</p>
            </button>
          </div>
          <div className="col-xs-6 visible-xs-block h-100">
            <button type="button" className="btn text-center button-purple border-0 w-100 h-100">
              <i aria-hidden="true" className="fa fa-bolt md-icon"></i>
              <p className="text-under-button">Trending</p>
            </button>
          </div>
          <div className="col-xs-3 visible-xs-block h-100">
            <button type="button" className="btn text-center button-purple border-0 w-100 h-100">
              <i aria-hidden="true" className="fa fa-check md-icon"></i>
              <p className="text-under-button">Closing</p>
            </button>
          </div>
        </div>

        {/* Desktop Screen Navigation Bar */}
        <div id="nav-lg-header" className="row fixed-top visible-sm-block visible-md-block visible-lg-block text-white bg-purple align-items-center">
          <div className="col-sm-3 visible-sm-block visible-md-block visible-lg-block h-100 ml-5">
            <button type="button" className="btn button-purple text-center border-0 h-100 mr-2" id="menu-lg-button">
              <i aria-hidden="true" className="fa fa-bars fa-2x"></i>
            </button>
            <p className="nav-text hungry" id="brand-lg-text">hungry</p><h6 className="nav-text hungry" id="brand-lg-title">@NYUAD</h6>
          </div>
          <div className="col-sm-5 visible-sm-block visible-md-block visible-lg-block">
            <div className="navbar-nav">
              <a href="#" className="nav-link active">Home</a>
              <a href="#" className="nav-link">Trending Orders</a>
              <a href="#" className="nav-item nav-link">Closing Orders</a>
            </div>
          </div>
          <div className="col-sm-4 visible-sm-block visible-md-block visible-lg-block"></div>
        </div>
      </div>
    );
  }
}
