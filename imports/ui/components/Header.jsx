import React, { Component } from 'react';


export default class Header extends Component {

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
              <a href="/signup">
                <i className="fa fa-user-plus text-white" aria-hidden="true"></i>&nbsp;Sign Up
              </a>
            </li>
            <li>
              <a href="/signin">
                <i className="fa fa-sign-in text-white" aria-hidden="true"></i>&nbsp; Log In
              </a>
            </li>
          </ul> {/* <!-- ul --> */}
        </div> {/* <!-- dropdown/collapsable navbar --> */}
      </nav>
    );
  }
}
