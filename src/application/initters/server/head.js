import React from 'react';
import { PropTypes as Type } from 'react';

export default class Head extends React.Component {

  static propTypes = {
    css_asset: Type.string.isRequired
  }

  constructor (props, context) {
    super(props, context);
  }

  render () {
    return (
        <head>

          <base href='/' />
          <meta charSet='utf-8' />

          <title>Page title</title>

          <meta name='viewport' content='width=device-width,initial-scale=1' />

          <link rel='stylesheet' href={this.props.css_asset} />

          <meta name='description' content='Pending pass description' />
          <meta name='keywords' content='Pending pass keywords' />

          <link rel='shortcut icon' href='favicon.ico' />
        </head>
    );
  }
}
