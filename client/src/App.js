import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';
import 'materialize-css/dist/js/materialize.min.js';
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WelcomePage from './pages/WelcomePage'
import DevPage from './pages/DevPage'
import EmailToolPage from './pages/EmailToolPage'
import FixedActionButton from './components/FixedActionButton';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from './actions'
import requireAuth from './components/hocs/requireAuth';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchUser()
  }

  render() {
    return (
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/emails" component={requireAuth(EmailToolPage)} />
              <Route path="/dev" component={DevPage} />
              <Route path="/" component={WelcomePage} />
            </Switch>
            {this.props.auth &&
              <FixedActionButton />}
            <Footer />
          </div>
        </Router>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
})

export default connect(mapStateToProps, { fetchUser })(App)