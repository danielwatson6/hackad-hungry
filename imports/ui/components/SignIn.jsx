import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Layout from './Layout.jsx';



export default class SignIn extends Component {
  render(){
    return (
      <div className="sign-in">
        <div className="container">
          <h1>Log In</h1>
          <br/>
          <div className="fb-login"> <Layout/> </div>
          <br/><h4> or </h4><br/>
          <div className="input-group username">
            <span className="input-group-addon" id="username-addon"><span className="glyphicon glyphicon-user"></span></span>
            <input type="text" className="form-control" placeholder="Username" aria-describedby="username-addon" />
          </div>
          <br/>
          <div className="input-group password">
            <span className="input-group-addon" id="password-addon"><span className="glyphicon glyphicon-lock"></span></span>
            <input type="password" className="form-control" placeholder="Password" aria-describedby="password-addon"/>
          </div>
          <br/>
          <br />
          <div className="form-group row sign-in-button">
            <div className="col-sm-2 col-sm-offset-5">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
