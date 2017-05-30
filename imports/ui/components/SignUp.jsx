//import {Accounts} from 'meteor/accounts-password';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Footer from '/imports/ui/components/Footer.jsx';
import FacebookLogin from '/imports/ui/components/layouts/FacebookLogin.jsx';
import { userAccountSchema } from '/imports/api/userAccountsSchema.jsx';
import { check, Match } from 'meteor/check';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Meteor } from 'meteor/meteor';


export default class SignUp extends Component{

  constructor(){
    super();
    this.state = {
      errors: new ReactiveDict()
    }
  }

  handleSignUp(event){
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
        password: accountDetails.password
      }, err => {
        if(err){console.log(err.reason)}
        else {
          if (!Meteor.isClient) {
            Accounts.onCreateUser((options, user) => {
              user.name = accountDetails.name;
              console.log("on server");
              return user;
            });
          }
          FlowRouter.go("/");
        }
      });


    }
    catch(error){
      console.log(error.message);
    }

  }

  render(){
    return (
      <div className="container-fluid pt-5">
        <FacebookLogin title="Sign Up" />
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
              <button type="submit" className="btn" id="login-btn" onClick={this.handleSignUp.bind(this)}>
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
