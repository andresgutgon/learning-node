import React from 'react';

export default class Head extends React.Component {

  constructor (props, context) {
    super(props, context);
  }

  render () {
    return (
        <head>

          <base href='/' />
          <meta charSet='utf-8' />

          <title>{title}</title>

          <meta name='viewport' content='width=device-width,initial-scale=1' />

          {!__DEV__ && <link rel='stylesheet' href={css_asset} />}

          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />

          <link rel='shortcut icon' href='favicon.ico' />
        </head>
    );
  }
}
