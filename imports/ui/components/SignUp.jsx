import { check, Match } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Session } from 'meteor/session';
//----------------------USER DEFINED IMPORTS----------------------
import FacebookLogin from '/imports/ui/components/layouts/FacebookLogin.jsx';
import Footer from '/imports/ui/components/Footer.jsx';
import { userAccountSchema } from '/imports/schemas/userAccountsSchema.jsx';
import Layout from '/imports/ui/components/layouts/Layout.jsx';

export default class SignUp extends Component{

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
      userAccountSchema.validate(accountDetails);
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
      error.details.forEach(function(e){
        if(e.name === "password" && e.type === "minString"){
          message = "Password is too short, password has to be at least 7 characters.";
          Session.set("passwordError", message);
        }
        else if(e.name === "confirmPassword" && e.type === "passwordMismatch") {
          message = "Passwords do not match.";
          Session.set("passwordError", message);
        } else if (e.name === "name" && e.type === "minString"){
          message = "Name is too short, enter a valid name.";
          Session.set("nameEror", message);
        } else if (e.name === "email" && e.type === "regEx"){
          message = "The email adress entered is not valid, enter a valid email.";
          Session.set("emailError", message);
        }
        console.log(message);
      });

    }

  } //close handlePasswordSignUp

  render(){
    return (
      <div className="container-fluid pt-5">
        <FacebookLogin title="Sign Up" buttonTitle="Create Account with Facebook"/>
        {/*<Layout /><br/><br/>*/}
        <form name="signup">
          <div className="input-group justify-content-center pt-0">
            <span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
            <input type="text" className="form-control" id="name-input" placeholder="John Doe" ref="name"/>
          </div>
          <div className="input-group justify-content-center pt-4">
            <span className="input-group-addon" id="email-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
            <input type="email" className="form-control"  id="email-input" aria-describedby="email-addon" placeholder="johndoe@example.com" ref="email"/>
          </div>
          <div className="input-group justify-content-center pt-4">
            <span className="input-group-addon" id="password-addon"><i className="fa fa-lock" aria-hidden="true"></i></span>
            <input type="password" className="form-control" id="password-input" aria-describedby="password-addon" placeholder="Password" ref="password"/>
          </div>
          <div className="input-group justify-content-center pt-4">
            <span className="input-group-addon" id="confirmPassword-addon"><i className="fa fa-lock" aria-hidden="true"></i></span>
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
