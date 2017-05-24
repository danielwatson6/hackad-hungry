import React, { Component } from 'react';

export default class Footer extends Component{

  render(){
    return (
      <footer className="footer fixed-bottom copyright">
        <hr/>
        <p className="text-center text-muted">
          &copy; hungry@NYUAD 2017.
        </p>
      </footer>
    );
  }
}
