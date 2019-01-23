import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProblemsList from './ProblemList/ProblemsList'
import Navigation from './Navigation'
import Forms from './ProblemList/Forms';
import Search from './ProblemList/Search';


class App extends Component {
  render() {
    return (
      <div>


        <ProblemsList />




        {/* <Navigation />
    <Route path={'/forms'} component={Forms} />
      <Route path={'/problem-list'} component={ProblemsList} />
      <Route path={'/search'} component={Search} /> */}

      </div>
    )
  }
}

export default App
