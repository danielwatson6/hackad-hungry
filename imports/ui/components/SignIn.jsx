import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Header from './Header.jsx';
import Layout from './Layout.jsx';



export default class SignIn extends Component {
  render(){
    return (
      <div className="sign-in">
        <Header />
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
      </form>
        <Layout />
      </div>
    );
  }
}
