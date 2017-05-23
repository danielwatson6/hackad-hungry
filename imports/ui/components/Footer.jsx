import React, { Component } from 'react';

export default class Footer extends Component{

  render(){
    return (
      <footer className="footer fixed-bottom copyright">
        <hr/>
        <p className="text-center text-uppercase text-muted">
          &copy; Hungry@NYUAD 2017.
        </p>
      </footer>
    );
  }
}
