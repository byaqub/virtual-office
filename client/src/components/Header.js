import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <li><a href="/auth/google">Log In</a></li>
      default:
        return <li><a href="/api/logout">Log Out</a></li>
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper green lighten-2">
          <NavLink to={this.props.auth ? '/surveys' : '/'} className="brand-logo center">Virtual Office</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/dev">Dev</NavLink></li>
            <li><NavLink to="/emails">emails</NavLink></li>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
})

export default connect(mapStateToProps)(Header)
