import React, { Component } from 'react';
import { TypeHere, Preview, FormType } from '../index';

class FancyPost extends Component {
  render() {
    const { settings } = this.props;
    return (
      <div>
        <TypeHere
          preview={Preview}
        />
        <FormType
          settings={settings}
          defaultSchemaType="post"
        />
      </div>
    );
  }
}

export default FancyPost;