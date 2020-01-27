import React, { Component } from 'react'

import { Provider } from 'react-redux'

import './App.css';
import LandingWithSearch from './components/landing';

import store from './store'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <LandingWithSearch />
        </Provider>
      </div>
    );
  }
}