import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//----------------------USER DEFINED IMPORTS----------------------
import ErrorAlert from '/imports/ui/components/Errors/ErrorAlert.jsx';


export default class Errors extends Component{
  constructor(props){
    super(props);
  }
  showToggle(){
    const modal = ReactDOM.findDOMNode(this.refs.errorModal);
    $(modal).modal('toggle');
  }
  componentDidMount(){
    this.showToggle();
  }
  componentDidUpdate(){
    this.showToggle();
  }


  render(){
    const title = this.props.title;
    const errors = this.props.errors || [];

    return (
      <div className="modal fade" ref="errorModal">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center"><strong>{title} </strong></h5>
            </div>
            <div className="modal-body">
              <ul className="list-unstyled">
                {errors.map((err, index)=>{
                  return <li key={index}><ErrorAlert error={err} /></li>
                })}
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default text-center" data-dismiss="modal"><strong>OK</strong></button>
            </div>
          </div>
        </div>
      </div>
    ); //return a modal
  }
}
