import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data'

import AccountsUIWrapper from './AccountsUIWrapper.jsx'


// Parent component - router will render everything inside
class Layout extends Component {
 
  render() {
    let content = (<AccountsUIWrapper />)
    
    if (this.props.currentUser) {
      content = (
        <div id="AppContent">
          <nav className="navbar navbar-inverse bg-inverse">
            <a href="/" className="navbar-brand">Hungry@NYUAD</a>
            <ul className="navbar-nav mr-auto">
              <li>Foo</li>
            </ul>
            <AccountsUIWrapper />
          </nav>
          {this.props.content()}
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
