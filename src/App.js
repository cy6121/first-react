/**
 * Created by rain on 2017/12/17.
 */
import React, { Component } from 'react';
import './app/asset/css/main.css';
import './app/asset/css/App.css';
import logo from '../logo.svg';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 1,
  //   };
  // }
  //
  //
  // add = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  render() {
    // return (
    //  <div>
    //    <h1 className="fontBig">{this.state.count}</h1>
    //    <button onClick={this.add}>增加1</button>
    //  </div>
    // );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
