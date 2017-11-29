import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMail } from '../actions';

class Content extends Component {

  constructor(props) {
    super(props)

    this.state = {
      display: false,
      answer: ""
    }
  }

  deleteCurrentMail() {
    const mail = this.props.activeMail;
    if (mail.message) {
      this.props.deleteMail(this.props.activeMail);
    }
  }

  updateDisplay(bool, e) {
    this.setState({ display: bool })
    if(!bool){
      this.setState({answer: ""});
    }
  }

  handleChange(e) {
    this.setState({
      answer: e.target.value
    })
  }

  render() {
    const mail = this.props.activeMail;
    return (
      <div className="content">
        <h2 className="header" id="title">Your Emails</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img src="https://lorempixel.com/100/190/nature/3" alt="placeholder" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p id="message">{mail.message}</p>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn" onClick={(e) => this.updateDisplay(true, e)}>Answer</a>
              <a className="waves-effect waves-light btn red lighten-2" onClick={this.deleteCurrentMail.bind(this)}>Delete</a>
            </div>
          </div>
        </div>
        <div className="input-field" style={{ display: this.state.display ? 'block' : 'none' }}>
          <textarea id="textarea1" className="materialize-textarea" onChange={this.handleChange.bind(this)} value={this.state.answer}></textarea>
          <label htmlFor="textarea1">Textarea</label>
          <a className="waves-effect waves-light btn" onClick={(e) => this.updateDisplay(false, e)}>Send Answer</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ activeMail, auth }) => ({
  activeMail,
  auth
})

export default connect(mapStateToProps, { deleteMail })(Content);