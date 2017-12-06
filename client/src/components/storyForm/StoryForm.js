import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import StoryField from './StoryField';
import StoryReview from './StoryReview';
import { Link } from 'react-router-dom';

const FIELDS = [
  { type: "text", label: "Story title", name: "title" },
  { type: "text", label: "Story Description", name: "description" },
  { type: "text", label: "Story Goal", name: "goal" },
  { type: "text", label: "Emails", name: "emails" }
]

class StoryForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       showReview: false
    }
  }
  

  switchFormOutput(){
    this.setState({
      showReview: this.state.showReview ? false : true
    })
  }

  renderFields() {
    return _.map(FIELDS, ({ type, label, name }) => {
      return <Field
        key={name}
        component={StoryField}
        type={type}
        name={name}
        label={label}
      />
    })

  }


  render() {
    return (
      <div className="myRow">
        <div className="container">
          <form style={{ marginTop: '10px' }} onSubmit={this.props.handleSubmit(values => console.log(values))}>
            {this.renderFields()}

              <Link to="/" className="red btn-flat left white-text" type="submit">Cancel</Link>
              <button className="teal btn-flat right white-text" onClick={this.switchFormOutput.bind(this)} type="submit">Next
            <i className="material-icons right">keyboard_arrow_right</i>
              </button>

          </form>
        </div>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must prove a value for ' + name;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'storyForm'
})(StoryForm);