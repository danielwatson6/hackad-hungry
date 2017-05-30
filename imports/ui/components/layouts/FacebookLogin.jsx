import React, { Component } from 'react';
import Layout from '/imports/ui/components/layouts/Layout.jsx';


export default class FacebookLogin extends Component {
  constructor(props){
    super(props);
    console.log(props.title);
  }

  goBack(){
    console.log('cancel button pressed');
  }

  render(){
    return (
      <div id="FacebookLoginLayout">
        <div className="fixed-top pt-4 pl-2">
          <button className="btn btn-link" onClick={this.goBack.bind(this)}><i className="fa fa-chevron-left text-primary" aria-hidden="true"></i> Cancel</button>
        </div>
        <h1 className="text-center text-uppercase pb-5 pt-5">{this.props.title}</h1>
        <br/>
        <div className="justify-content-center">
          <div id="facebook-button">
          <Layout /><br />
          </div>
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
