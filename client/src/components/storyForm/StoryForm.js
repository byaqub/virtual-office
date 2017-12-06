import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import StoryField from './StoryField';
import { Link } from 'react-router-dom';
import formFields from './formFields';
import validateEmails from '../../utils/validateEmails';

class StoryForm extends Component {

  renderFields() {
    return _.map(formFields, ({ type, label, name }) => {
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
          <form style={{ marginTop: '10px' }} onSubmit={this.props.handleSubmit(this.props.onStorySubmit)}>
            {this.renderFields()}

              <Link to="/" className="red btn-flat left white-text" type="submit">Cancel</Link>
              <button className="teal btn-flat right white-text" type="submit">Next
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

  errors.emails = validateEmails(values.emails || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must prove a value for ' + name;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'storyForm',
  destroyOnUnmount: false
})(StoryForm);