import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProblemsList from './ProblemList/ProblemsList'
import Forms from './ProblemList/Forms'
import TemporaryDrawer from './Navigation/TemporaryDrawer'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            
            <TemporaryDrawer />
            <Route path={'/'} exact component={ProblemsList} />
            <Route path={'/problemsList'} component={ProblemsList} />
            <Route path={'/forms'} exact component={() => <Forms isPRoblemAdded={false} />} />
           
          </div>
        </Router>
      </div>
    )
  }
}

export default App
