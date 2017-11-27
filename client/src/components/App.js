import React, { Component } from 'react'
import Header from './Header'
import Start from './Start'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

const SurveyNew = () => <h1>SurveyNew</h1>
const Dashboard = () => <h1>Dashboard</h1>


class App extends Component {

  componentDidMount = () => {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/surveys/new" component={SurveyNew} />
              <Route path="/surveys" component={Dashboard} />
              <Route path="/" component={Start} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}


export default connect(null, { fetchUser })(App)