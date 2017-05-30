import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SimpleSchema }  from 'meteor/aldeed:simple-schema';
import { userAccountSchema,  loginSchema } from '/imports/api/userAccountsSchema.jsx';
import FacebookLogin from '/imports/ui/components/layouts/FacebookLogin.jsx';
import Footer from '/imports/ui/components/Footer.jsx';



export default class SignIn extends Component {

  componentWillMount(){
    console.log("SignIn Component is loading...");
  }

  componentDidMount(){
    console.log("SignIn Component loaded.");
  }

  componentDidUnMount(){
    console.log("SignIn Component is being destroyed.");
  }

  handleSignin(event){
    event.preventDefault();
    const email = ReactDOM.findDOMNode(this.refs.emailField).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.passwordField).value.trim();


    loginDetails = {
      email: email,
      password: password
    }
    loginSchema.validate(loginDetails);

    Meteor.loginWithPassword(email, password, function (err) {
      if(err){
        console.log(err.reason);
        ReactDOM.findDOMNode(this.refs.passwordField).value = '';
        throw new Meteor.Error('user not found');
      }
      else {
        console.log("User successfully logged in");
        FlowRouter.go('/');
      }
    });
  }

  render(){
    return (
      <div className="container-fluid pt-5" id="logincontainer">
        <FacebookLogin title="Login"/>
        <form name="signin">
          <div className="input-group pt-3 justify-content-center">
            <span className="input-group-addon" id="email-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
            <input type="email" className="form-control"  id="email-input" aria-describedby="email-addon" placeholder="johndoe@example.com" ref="emailField"/>
          </div><br />
          <div className="input-group justify-content-center pt-3">
            <span className="input-group-addon" id="password-addon"><i className="fa fa-lock" aria-hidden="true"></i></span>
            <input type="password" className="form-control" id="password-input" aria-describedby="password-addon" placeholder="Password" ref="passwordField"/>
          </div>
          <br/>
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
