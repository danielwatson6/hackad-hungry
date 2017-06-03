import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';


export default class Header extends Component {

  logUserOut(event){
    event.preventDefault();
    if(!Meteor.userId()){
      throw new Meteor.Error('not-logged-in', 'User has to be logged in to logout');
    }
    Meteor.logout(err => {
      if(err){
        Session.set("LogoutError", err.reason || "Unknown error");
      }
      else {
        console.log("Logout Successful.");
      }
    });

  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="nav-header">
        <div className="row">
          <div className="col-xs-3">
            <button type="button" className="navbar-toggle text-white" data-toggle="collapse" data-target="#header" id="menu-button">
              <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </button>
          </div> {/* <!-- col --> */}
            <div className="col-xs-3">
              <a className="navbar-brand navbar-right" href="/" id="brand"><img src="/images/logo-3.png" width="23px" height="30px"/></a>
            </div> {/* <!-- col --> */}
        </div> {/* <!-- col --> */}

        <div className="collapse navbar-collapse" id="header">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li className="text-white"><a href="#">Restaurants</a></li>
            <li><a href="#">Subscriptions</a></li>
            <li className="dropdown-divider"></li>
          </ul> {/* <!-- ul --> */}
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a onClick={this.logUserOut.bind(this)}>
                <i className="fa fa-sign-out text-white" aria-hidden="true"></i>&nbsp;
                Log Out
              </a>
            </li>
          </ul> {/* <!-- ul --> */}
        </div> {/* <!-- dropdown/collapsable navbar --> */}
      </nav>
    );
  }
}
