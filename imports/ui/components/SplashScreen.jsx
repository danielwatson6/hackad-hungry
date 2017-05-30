import React, { Component } from 'react';



export default class SplashScreen extends Component{

  redirectTo(link){FlowRouter.go(link);}

  render(){
    return (
      <div className="container-fluid pt-5 d-flex align-items-center justify-content-start" id="splash">
        <div id="splash-icon" className="fixed-top">
          <img src="/images/logo-3.png" width="35px" height="45px" alt="logo"/>
        </div>

        <div id="welcome" className="w-100 text-center text-white">
          <h2 className="text-white pb-1">Welcome to</h2>
          <h2 className="text-white hungry">hungry</h2><h1 className="text-white hungry">@NYUAD</h1>
          <figcaption className="figure-caption text-white text-center pt-1" id="slogan">Ordering from campus made easy.</figcaption>
        </div>
        <section className="section pt-5 fixed-bottom">
          <div className="form-group row sign-in-button justify-content-center">
            <div className="col-xs-9 offset-xs-1">
              <button type="submit" className="btn" id="login-btn-splash" onClick={this.redirectTo.bind(this, "/signup")}>
                <i className="fa fa-user-plus text-purple" aria-hidden="true"></i>
                &nbsp;Sign Up
              </button>
            </div>
          </div>
          <div className="form-group row sign-in-button justify-content-center">
            <div className="col-xs-9 offset-xs-1">
              <button type="submit" className="btn" id="login-btn" onClick={this.redirectTo.bind(this, "/signin")}>
                <i className="fa fa-user text-white" aria-hidden="true"></i>&nbsp;
                Sign In
              </button>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
