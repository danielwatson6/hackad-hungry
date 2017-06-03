import { check, Match } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Session } from 'meteor/session';
//----------------------USER DEFINED IMPORTS----------------------
import Errors from '/imports/ui/components/Errors/Errors.jsx';
import FacebookLogin from '/imports/ui/components/layouts/FacebookLogin.jsx';
import Footer from '/imports/ui/components/Footer.jsx';
import { getErrorMessage, signUpAccountSchema } from '/imports/schemas/userAccountsSchema.jsx';


export default class SignUp extends Component{

  constructor(){
    super();
    this.state = {
      errors: []
    }
  }

  handlePasswordSignUp(event){
    event.preventDefault();
    console.log('SignUp Button Pressed');
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    const confirmPassword = ReactDOM.findDOMNode(this.refs.confirmPassword).value.trim();
    accountDetails = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
    try {
      signUpAccountSchema.validate(accountDetails);
      Accounts.createUser({
        email: accountDetails.email,
        password: accountDetails.password,
        name: accountDetails.name
      }, err => {
        if(err){
          console.log(err.reason);
          Session.set("AccountCreationError", err.reason || "Unknown error")
        }
        else {
          Session.set("AccountCreationSuccess", "Account Created Successfully.");
          FlowRouter.go("/");
        }
      }); //Close Accounts.createUser();
    }
    catch(error){ //Catch the validation errors
      let message = "";
      const errorMessages = [];
      error.details.forEach(function(e){
        message = getErrorMessage(e);
        if(message !== "")
          errorMessages.push(message);
      });
      this.setState({
        errors: errorMessages
      });
    }

  } //close handlePasswordSignUp

  renderErrors(){
    if(this.state.errors.length){
      return <Errors title="Account Creation Failed" errors={this.state.errors} />;
    }
  }

  render(){
    return (
      <div className="container-fluid pt-5">
        {this.renderErrors()}
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
