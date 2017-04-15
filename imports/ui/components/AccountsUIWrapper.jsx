import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'

import PropTypes from 'prop-types';


// Since the accounts-ui package defaults to render with Blaze,
// we add this wrapper to make it integrate with React
export default class AccountsUIWrapper extends Component {

  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container))
    $('.login-display-name').hide()
  }

  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view)
  }

  render() {
    // Just render a placeholder container that will be filled in
    return <div ref="container" id="AccountsUIWrapper" />
  }
}
