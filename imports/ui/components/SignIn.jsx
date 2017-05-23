import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Layout from './Layout.jsx';
import Footer from '/imports/ui/components/Footer.jsx';


export default class SignIn extends Component {
  render(){
    return (
      <div className="container-fluid pt-5" id="logincontainer">
          <h1 className="text-center text-uppercase pb-5 pt-5">Login</h1>
          <br/>
          <div className="row justify-content-center">
            <div className="col-xs-9 offset-xs-1">
              <Layout /><br/>
            </div>
          </div>
          <br/><h4 className="text-center text-uppercase figure-caption"> or </h4><br/><br/>
          <div className="input-group username clearfix"> {/* <!-- Input group --> */}
              <input type="text" className="form-control item mx-auto" placeholder="Username or email" aria-describedby="username-addon" />
          </div> {/* <!-- Input group --> */}
          <br/>
          <div className="input-group password clearfix">
            <input type="password" className="form-control item mx-auto" placeholder="Password" aria-describedby="password-addon"/>
          </div>
        <br/>
        <br />
        <br/>
        <section className="section">
          <div className="form-group row sign-in-button justify-content-center">
            <div className="col-xs-9 offset-xs-1">
              <button type="submit" className="btn" id="login-btn">Sign in</button>
            </div>
          </div>
          <figcaption className="figure-caption text-center">
            Forgot your login details? <a href="#" className="text-primary">Help me sign in.</a>
          </figcaption>
        </section>
        <Footer />
      </div>
    );
  }
}
