import React from 'react';

import LoginRequired from 'src/application/decorators/login-required';

const GroupList = LoginRequired(class App extends React.Component {
  render () {
    return (<div>Group list</div>);
  }
});

export default GroupList;
