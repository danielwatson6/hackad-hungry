import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data'

import AccountsUIWrapper from './AccountsUIWrapper.jsx'


// Parent component - router will render everything inside
class Layout extends Component {
 
  render() {
    let content = ''
    
    //if (this.props.currentUser) {
    if (true) {
      content = (
        <div id="AppContent">
          <nav className="navbar navbar-inverse bg-inverse">
            <div className="container">
              <a href="/" className="navbar-brand">Hungry@NYUAD</a>
              <ul className="nav navbar-nav">
                <li className="pull-right">
                  <AccountsUIWrapper />
                </li>
              </ul>
            </div>
          </nav>
          <div id="layoutContainer" className="container">
            {this.props.content()}
          </div>
        </div>
      )
    }
    
    return (<div id="App">{content}</div>)
  }
}

Layout.propTypes = {
  content: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  }
}, Layout)
