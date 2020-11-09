import React, { Component} from 'react';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <EmbeddedPost href="http://www.facebook.com" width="500" />
      </FacebookProvider>
    );
  }
}