import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';
import 'materialize-css/dist/js/materialize.min.js';
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WelcomePage from './pages/WelcomePage'
import AdminPage from './pages/AdminsPage'
import EmailToolPage from './pages/EmailToolPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from './actions'

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
              <Route path="/emails" component={EmailToolPage} />
              <Route path="/admins" component={AdminPage} />
              <Route path="/" component={WelcomePage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    )
  }
}


export default connect(null, { fetchUser })(App)