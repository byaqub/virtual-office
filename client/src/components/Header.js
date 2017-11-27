import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Payments from './Payments'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <li><a href="/auth/google">Log In</a></li>
      default:
        return [
          <li key='3'><a className="btn-floating blue btn-large waves-effect waves-light red">{this.props.auth.credits}</a></li>,
          <li key='1'><Payments /></li>,
          <li key='2'><a href="/api/logout">Log Out</a></li>
        ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper amber">
          <NavLink to={this.props.auth ? '/surveys' : '/'} className="brand-logo">Virtual Office</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/surveys">Dashboard</NavLink></li>
            <li><NavLink to="/surveys/new">emails</NavLink></li>
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
