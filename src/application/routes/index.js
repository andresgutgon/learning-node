import React from 'react';
import { Route, IndexRoute } from 'react-router';

class App extends React.Component {
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

class Home extends React.Component {
  render () {
    return <div>Hello from katuma</div>;
  }
}

//class App extends React.Component {
  //constructor (props, context){
    //super(props, context);
  //}

  //render () {
    //return (
      //<section id='layout'>
        //{this.props.children}
      //</section>
    //);
  //}
//}

//class Home extends React.Component {
  //constructor (props, context) {
    //super(props, context);
  //}

  //static onEnter (next, redirect) { 
    //const isAuthenticated = false;

    //if (!isAuthenticated) {
      //return redirect({}, '/login');
    //}
  //}

  //render() {
    //return <h2>Home on when not user present</h2>
  //}
//}

//class GroupApp extends React.Component {
  //constructor (props, context) {
    //super(props, context);
  //}

  //render() {
    //return <h2>Group app</h2>
  //}
//}

//class GroupList extends React.Component {
  //constructor (props, context) {
    //super(props, context);
  //}

  //render() {
    //return <h2>Group List</h2>
  //}
//}

//class GroupDetail extends React.Component {
  //render() {
    //return <h2>Group Detail</h2>
  //}
//}

//class GroupMembers extends React.Component {
  //render() {
    //return <h2>List of group's members</h2>
  //}
//}

//const Home = React.createClass({
  //render() {
    //return <h2>Home</h2>
  //}
//})

//const Login = React.createClass({
  //render() {
    //return <h2>Login page</h2>
  //}
//})

//const NotFound = React.createClass({
  //render() {
    //return <h2>Not found</h2>
  //}
//})


    //<Route path='/login' component={Login} />
    //<Route path="*" component={NotFound} />
    //<IndexRoute name='home' component={Home} onEnter={Home.onEnter} />
    //<Route name='groups' path='/groups' component={GroupApp}>
      //<IndexRoute component={GroupList} />

      //<Route path=':id' component={GroupDetail}>
        //<IndexRoute component={GroupMembers}/>
        //<Route path='members' component={GroupMembers} />
      //</Route>    

     //</Route>    

export default (context) => (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  </Route>
);

