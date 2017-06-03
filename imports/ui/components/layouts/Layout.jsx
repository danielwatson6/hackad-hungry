import React, { Component} from 'react';
import PropTypes from 'prop-types';

import AccountsUIWrapper from '/imports/ui/components/layouts/AccountsUIWrapper.jsx';


// Parent component - router will render everything inside
export default class Layout extends Component {

  render() {
    let content = (<AccountsUIWrapper />)

    if (this.props.currentUser) {
      content = (
        <div id="AppContent">
          <nav className="navbar navbar-toggleable-xl navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right"
             data-toggle="collapse" data-target="#navbarSupportedContent"
             aria-controls="navbarSupportedContent" aria-expanded="false"
             aria-label="Toggle navigation" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/">Hungry@NYUAD</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <AccountsUIWrapper />
              </form>
            </div>
          </nav>
          {this.props.content()}
        </div>
      )
    }

    return (<div id="FBLayout">{content}</div>)
  }
}

// Layout.propTypes = {
//   content: PropTypes.func.isRequired,
//   currentUser: PropTypes.object,
// }
