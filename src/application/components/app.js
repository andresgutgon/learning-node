import React from 'react';
import { PropTypes as Type } from 'react';
import { connect } from 'react-redux';

@connect((state) => ({
  auth: state.auth
}))

export default class App extends React.Component {
  static propTypes = {
    auth: Type.object.isRequired
  , dispatch: Type.func.isRequired
  , children: Type.object
  }

  constructor (props, context) {
    super(props, context);
  }

  render () {
    return (
      <section id='layout'>
        {this.props.children}
      </section>
    );
  }
}

