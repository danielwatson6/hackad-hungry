import React, { Component } from 'react';



export default class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="row">
          <div className="col-xs-3">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#header" id="menu-button">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div> {/* <!-- col --> */}
            <div className="col-xs-3">
              <a className="navbar-brand text-uppercase text-right" href="/" id="brand">Hungry@NYUAD</a>
            </div> {/* <!-- col --> */}
        </div> {/* <!-- col --> */}

        <div className="collapse navbar-collapse" id="header">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Subscriptions</a></li>
          </ul> {/* <!-- ul --> */}
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-user"></span>&nbsp;Sign Up
              </a>
            </li>
            <li>
              <a href="/signin">
                <span className="glyphicon glyphicon-log-in"></span>&nbsp; Log In
              </a>
            </li>
          </ul> {/* <!-- ul --> */}
        </div> {/* <!-- dropdown/collapsable navbar --> */}
      </nav> 
    );
  }
}
