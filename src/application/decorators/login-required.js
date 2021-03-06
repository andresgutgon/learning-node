import React, { Component } from 'react';

export default function loginRequired (ChildComponent) {
  class Authenticated extends Component {

    static onEnter (next, redirect) {
      // Assume user is never authenticated
      // TODO: link with some API for better example
      const isAuthenticated = false;

      if (!isAuthenticated) {
        return redirect({}, '/login');
      }
    }

    render () {
      return <ChildComponent {...this.props} {...this.state} />;
    }
  }

  return Authenticated;
}
