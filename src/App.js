import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProblemsList from './ProblemList/ProblemsList'
import Forms from './ProblemList/Forms';
import Search from './ProblemList/Search';


class App extends Component {
  render() {
    return (
      <div>
        <ProblemsList />
      </div>
    )
  }
}

export default App
