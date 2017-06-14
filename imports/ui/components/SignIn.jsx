import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SimpleSchema }  from 'meteor/aldeed:simple-schema';
//----------------------USER DEFINED IMPORTS----------------------
import { loginSchema, getErrorMessage } from '/imports/schemas/userAccountsSchema.jsx';
import FacebookLogin from '/imports/ui/components/layouts/FacebookLogin.jsx';
import Footer from '/imports/ui/components/Footer.jsx';
import Modal from '/imports/ui/components/Alerts/Modal.jsx';


export default class SignIn extends Component {

  constructor(){
    super();
    this.state = {
      errors: [],
      successes: []
    };

  }

  handleSignin(event){
    event.preventDefault();
    const email = ReactDOM.findDOMNode(this.refs.emailField).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.passwordField).value.trim();
    const thisTmp = this;

    loginDetails = {
      email: email,
      password: password
    }
    let message = "";
    try {
      loginSchema.validate(loginDetails);
      Meteor.loginWithPassword(email, password, function (err) {
        if(err){
          message = err.reason || "Unknown error";
          thisTmp.setState({
            errors: [message]
          });
          ReactDOM.findDOMNode(thisTmp.refs.passwordField).value = '';
        }
        else {
          message = "Login Successful."
          thisTmp.setState({
            successes: [message],
            errors: []
          });
          Meteor.setTimeout(function () {
            FlowRouter.go('/');
          }, 1000*3);

        }
      });
    }
    catch (error){
      const errorMessages = [];
      error.details.forEach((e)=> {
        message = getErrorMessage(e);
        if(message !== "")
          errorMessages.push(message);
      });
      this.setState({
        errors: errorMessages
      });
      ReactDOM.findDOMNode(thisTmp.refs.passwordField).value = '';
    }

  }

  renderAlerts(){
    if(this.state.errors.length){
      return <Modal title="Login Failed" contents={this.state.errors} alertType="error" />;
    } else if(this.state.successes.length){
      return <Modal title="Login Successful" contents={this.state.successes} alertType="success" />
    }
  }

  render(){
    return (
      <div className="container-fluid pt-5" id="logincontainer">
        {this.renderAlerts()}
        <FacebookLogin title="Login" buttonTitle="Sign in with Facebook"/>
        <form name="signin">
          <div className="input-group pt-3 justify-content-center">
            <span className="input-group-addon text-purple" id="email-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
            <input type="email" className="form-control"  id="email-input" aria-describedby="email-addon" placeholder="Email" ref="emailField"/>
          </div>
          <div className="input-group justify-content-center pt-3">
            <span className="input-group-addon text-purple" id="password-addon"><i className="fa fa-lock" aria-hidden="true"></i></span>
            <input type="password" className="form-control" id="password-input" aria-describedby="password-addon" placeholder="Password" ref="passwordField"/>
          </div>
          <br />
          <br/>
          <section className="section" id="section">
            <div className="form-group sign-in-button justify-content-center">
              <button type="submit" className="btn" id="login-btn" onClick={this.handleSignin.bind(this)}>
                <i className="fa fa-sign-in text-white"></i>&nbsp;
                Sign In
              </button>
            </div>
            <figcaption className="figure-caption text-center pb-2">
              Forgot your login details? <a href="#" className="text-primary">Help me sign in.</a>
            </figcaption>
            <figcaption className="figure-caption text-center pt-3">
              Don't have an account?<a href="/signup" className="text-primary"> Register. </a>
            </figcaption>
          </section>
        </form>
        <Footer />
      </div>
    );
  }

}
