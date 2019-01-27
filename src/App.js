import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProblemsList from './ProblemList/ProblemsList'
import Forms from './ProblemList/Forms'
import TemporaryDrawer from './Navigation/TemporaryDrawer';
import Default from './ProblemList/Default';
import ButtonAppBar from './Navigation/ButtonAppBar'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
         {/* < ButtonAppBar/> */}
            <TemporaryDrawer />
            <Route path={'/'} exact component={Default} />
            <Route path={'/problemsList'} component={ProblemsList} />
            <Route path={'/forms'} exact component={Forms} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
