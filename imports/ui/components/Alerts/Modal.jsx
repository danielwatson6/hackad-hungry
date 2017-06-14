import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//----------------------USER DEFINED IMPORTS----------------------
import Alert from '/imports/ui/components/Alerts/Alert.jsx';


export default class Modal extends Component{
  constructor(props){
    super(props);
  }
  showModal(){
    const modal = ReactDOM.findDOMNode(this.refs.alertModal);
    $(modal).modal('toggle');
  }
  componentDidMount(){
    this.showModal();
  }
  componentDidUpdate(){
    this.showModal();
  }

  render(){
    const title = this.props.title;
    const contents = this.props.contents || [];
    const alertType = this.props.alertType;

    return (
      <div className="modal fade in" ref="alertModal">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center"><strong>{title} </strong></h5>
            </div>
            <div className="modal-body">
              <ul className="list-unstyled">
                {contents.map((content, index)=>{
                  return <li key={index}><Alert content={content} type={alertType}/></li>
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
