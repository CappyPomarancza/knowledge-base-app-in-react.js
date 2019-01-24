import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProblemsList from './ProblemList/ProblemsList'
import Forms from './ProblemList/Forms';
import Search from './ProblemList/Search';
import Problem from './ProblemList/Problem';
import Navigation from './Navigation/Navigation';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Router>
          <div>
            <Route path={'/'} exact component={ProblemsList} />
            <Route path={'/problemsList'} component={ProblemsList} />
            <Route path={'/forms'} exact component={Forms} />
            {/* <Route path={'/favourites'} component={Favourites} /> */}
          </div>
        </Router>
      </div>
    )
  }
}

export default App
