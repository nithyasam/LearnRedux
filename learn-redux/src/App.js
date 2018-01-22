import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/user-list';
import UserDetails from './containers/user-details';

class App extends Component {
  render() {
    return (
      <div>
       <h2>User List</h2>
        <UserList />
       <hr/>
       <h2>User Details</h2>
       <UserDetails />
       <hr/>
      </div>
    );
  }
}

export default App;
