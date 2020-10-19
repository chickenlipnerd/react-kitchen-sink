import React from 'react';
import './App.css';
import { Hello } from './components/hello'

class App extends React.Component {
  state = {
    loggedIn: false
  }

  static defaultProps = { "charlie": "murphy" };

  logIn = () => this.setState({ loggedIn: true })
  logOut = () => this.setState({ loggedIn: false })

  render() {
    return (
      <div>
        <button onClick={this.logIn}>Log In</button>
        <button onClick={this.logOut}>Log Out</button>
        <div>The user is {this.state.loggedIn ? "logged in" : "not logged in"}.</div>
        <Hello library="I don't know" message="nevermind" />
        <Hello library="I do know" message="Pay attention" meta="foo" />
      </div>
    )
  }
}

//App.defaultProps = {"charlie": "murphy"}; // Add defaultProps as a static property - hint: Look in class for static property

export default App;
