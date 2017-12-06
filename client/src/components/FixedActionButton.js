import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="fixed-action-btn horizontal">
      <Link to="/emails" className="btn-floating btn-large lime darken-1">
        <i className="large material-icons">add</i>
      </Link>
    </div>
  )
}
