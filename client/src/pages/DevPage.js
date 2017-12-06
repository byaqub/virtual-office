import React, { Component } from 'react';
import StoryForm from '../components/storyForm/StoryForm'
import StoryReview from '../components/storyForm/StoryReview'
import { reduxForm } from 'redux-form';

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
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'storyForm'
})(DevPage);