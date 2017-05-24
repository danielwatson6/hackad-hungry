import React, { Component } from 'react';



export default class SplashScreen extends Component{

  redirectTo(s){
    //let s = "signup";
    if(s == "signup") FlowRouter.go('/signup');
    else if (s == "login") FlowRouter.go('/signin');
  }

  render(){
    return (
      <div className="container-fluid pt-5 d-flex align-items-center justify-content-start" id="splash">
        <div id="splash-icon" className="fixed-top">
          <img src="/images/nyuadlogo.png" width="30px" height="30px" alt="logo"/>
        </div>

        <div id="welcome" className="align-items-start justify-content-start">
          <h2 className="text-white">Welcome to</h2>
          <h2 className="text-white hungry">hungry</h2><h1 className="text-white hungry">@NYUAD</h1><br/><br />
          <p className="text-white">Ordering from campus made easy.</p>
        </div>
        <section className="section pt-5 fixed-bottom">
          <div className="form-group row sign-in-button justify-content-center">
            <div className="col-xs-9 offset-xs-1">
              <button type="submit" className="btn" id="login-btn-splash" onClick={this.redirectTo.bind(this, "signup")}>Sign Up</button>
            </div>
          </div>
          <div className="form-group row sign-in-button justify-content-center">
            <div className="col-xs-9 offset-xs-1">
              <button type="submit" className="btn" id="login-btn" onClick={this.redirectTo.bind(this, "login")}>Sign In</button>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
