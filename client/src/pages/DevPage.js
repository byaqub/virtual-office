import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoryForm from '../components/storyForm/StoryForm'

import requireAuth from '../components/hocs/requireAuth';

class DevPage extends Component {
  render() {
    return (
      <StoryForm />
    )
  }
}

export default connect(null)(requireAuth(DevPage));