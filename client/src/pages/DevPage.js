import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoryForm from '../components/storyForm/StoryForm'
import StoryReview from '../components/storyForm/StoryReview'

import requireAuth from '../components/hocs/requireAuth';

class DevPage extends Component {

  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <StoryReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <StoryForm
        onStorySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <StoryForm />
    )
  }
}

export default connect(null)(requireAuth(DevPage));