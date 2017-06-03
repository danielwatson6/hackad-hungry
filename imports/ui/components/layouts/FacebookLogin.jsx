import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Session } from 'meteor/session';


export default class FacebookLogin extends Component {
  constructor(props){
    super(props);
  }

  goBack(event){
    event.preventDefault();
    console.log('cancel button pressed');
  }

  handleFacebookSignUp(event){
    event.preventDefault();
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email',]
    }, (err) => {
      if(err){
        Session.set('facebookLoginError', err.reason || "Unknown error");
      }
      else{
        FlowRouter.go("/");
      }
    });

  }

  render(){
    return (
      <div id="FacebookLoginLayout">
        <div className="fixed-top pt-4 pl-2">
          <button className="btn btn-link" onClick={this.goBack.bind(this)}><i className="fa fa-chevron-left text-primary" aria-hidden="true"></i> Cancel</button>
        </div>
        <h1 className="text-center text-uppercase pb-5 pt-5">{this.props.title}</h1>
        <br/>
        <div className="form-group sign-in-button justify-content-center" id="facebook-button">
          <button type="button" className="btn" id="login-btn" onClick={this.handleFacebookSignUp.bind(this)}>
            <i className="fa fa-facebook-official text-white" aria-hidden="true"></i>&nbsp;&nbsp;
            {this.props.buttonTitle}
          </button>
        </div>
        <br/>
        <h4 className="text-center text-uppercase figure-caption or-separator">
          <span className="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; </span>
          &nbsp;or&nbsp;
          <span className="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
        </h4><br/><br/>
      </div>
    );
  }
}
