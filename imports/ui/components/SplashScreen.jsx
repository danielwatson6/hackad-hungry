import React, { Component } from 'react';


export default class SplashScreen extends Component{
  loadLogin(e){
    e.preventDefault();
    console.log("sign in button clicked");
  }
  render(){
    return (
      <div className="container-fluid pt-5 d-flex align-items-center justify-content-start" id="splash">
        <div id="splash-icon" className="fixed-top">
          <img src="/images/nyuadlogo.png" width="30px" height="30px" alt="logo"/>
        </div>

        <div id="welcome" className="align-items-start justify-content-start">
          <h2 className="text-white">Welcome to</h2>
          <h1 className="text-white">Hungry@NYUAD</h1><br/>
          <p className="text-white">Ordering from Saadiyat made easy.</p>
        </div>
        <section className="section pt-5 fixed-bottom">
          <div className="form-group row sign-in-button justify-content-center">
            <div className="col-xs-9 offset-xs-1">
              <button type="submit" className="btn" id="login-btn-splash">Sign Up</button>
            </div>
          </div>
          <div className="form-group row sign-in-button justify-content-center">
            <div className="col-xs-9 offset-xs-1">
              <button type="submit" className="btn" id="login-btn"onClick={this.loadLogin.bind(this)}>Sign In</button>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
