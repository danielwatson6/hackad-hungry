import { check, Match } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Session } from 'meteor/session';
//----------------------USER DEFINED IMPORTS----------------------
import Modal from '/imports/ui/components/Alerts/Modal.jsx';
import FacebookLogin from '/imports/ui/components/layouts/FacebookLogin.jsx';
import Footer from '/imports/ui/components/Footer.jsx';
import { getErrorMessage, signUpAccountSchema } from '/imports/schemas/userAccountsSchema.jsx';


export default class SignUp extends Component{

  constructor(){
    super();
    this.state = {
      errors: [],
      successes: []
    }
  }

  handlePasswordSignUp(event){
    event.preventDefault();
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    const confirmPassword = ReactDOM.findDOMNode(this.refs.confirmPassword).value.trim();
    const thisTmp = this;

    accountDetails = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    let message = "";
    try {
      signUpAccountSchema.validate(accountDetails);
      Accounts.createUser({
        email: accountDetails.email,
        password: accountDetails.password,
        name: accountDetails.name
      }, err => {
        if(err){
          message = err.reason || "Unknown error";
          thisTmp.setState({
            errors: [message]
          });
          ReactDOM.findDOMNode(thisTmp.refs.password).value = '';
          ReactDOM.findDOMNode(thisTmp.refs.confirmPassword).value = '';
        }
        else {
          message = "Account Created Successfully.";
          thisTmp.setState({
            successes: [message]
          })
          Meteor.setTimeout(function () {
            FlowRouter.go('/');
          }, 1000*2);
        }
      }); //Close Accounts.createUser();
    }
    catch(error){ //Catch the validation errors
      const errorMessages = [];
      error.details.forEach(function(e){
        message = getErrorMessage(e);
        if(message !== "")
          errorMessages.push(message);
      });
      this.setState({
        errors: errorMessages
      });
      ReactDOM.findDOMNode(thisTmp.refs.password).value = '';
      ReactDOM.findDOMNode(thisTmp.refs.confirmPassword).value = '';
    }

  } //close handlePasswordSignUp

  renderAlerts(){
    if(this.state.errors.length){
      return <Modal title="Account Creation Failed" contents={this.state.errors} alertType="error" />;
    } else if(this.state.successes.length){
      return <Modal title="Account Creation Successful" contents={this.state.successes} alertType="success" />
    }
  }

  render(){
    return (
      <div className="container-fluid pt-5">
        {this.renderAlerts()}
        <FacebookLogin title="Sign Up" buttonTitle="Create Account with Facebook"/>
        <form name="signup">
          <div className="input-group justify-content-center pt-0">
            <span className="input-group-addon text-purple"><i className="fa fa-user" aria-hidden="true"></i></span>
            <input type="text" className="form-control" id="name-input" placeholder="Full Name" ref="name"/>
          </div>
          <div className="input-group justify-content-center pt-4">
            <span className="input-group-addon text-purple" id="email-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
            <input type="email" className="form-control"  id="email-input" aria-describedby="email-addon" placeholder="Email" ref="email"/>
          </div>
          <div className="input-group justify-content-center pt-4">
            <span className="input-group-addon text-purple" id="password-addon"><i className="fa fa-lock" aria-hidden="true"></i></span>
            <input type="password" className="form-control" id="password-input" aria-describedby="password-addon" placeholder="Password" ref="password"/>
          </div>
          <div className="input-group justify-content-center pt-4">
            <span className="input-group-addon text-purple" id="confirmPassword-addon"><i className="fa fa-lock" aria-hidden="true"></i></span>
            <input type="password" className="form-control" id="confirmPassword-input" aria-describedby="confirmPassword-addon" placeholder="Confirm Password" ref="confirmPassword"/>
          </div>
          <section className="section pt-5">
            <div className="form-group sign-in-button">
              <button type="submit" className="btn" id="login-btn" onClick={this.handlePasswordSignUp.bind(this)}>
                <i className="fa fa-user-plus text-white"></i>&nbsp;
                Create Account
              </button>
            </div>
            <figcaption className="figure-caption text-center">
              Already have an account? <a href="/signin" className="text-primary">Sign in.</a>
            </figcaption>
          </section>
        </form>
        <Footer />
      </div>
    );
  }
}
