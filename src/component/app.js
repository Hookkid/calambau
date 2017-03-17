import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Home from './page/Home'
import BottlePage from './page/BottlePage'
import Login from './layout/Login'
import Register from './layout/Register'
import Dashboard from './layout/protected/Dashboard'

const history = createHistory()

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}


class App extends Component {
  state = {  
    authed: false,
    loading: false,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: true,
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
   return this.state.loading === true ? <h1>Loading</h1> : (
      <Router history={history}>      
        <div>
          <Route path={'/'} exact component={Home} />
          <Route path={'/cachaca/:bottle'} component={BottlePage} />
          <PublicRoute authed={this.state.authed} exact path={'/login'} component={Login} />
          <PublicRoute authed={this.state.authed} exact path={'/register'} component={Register} />
          <PrivateRoute authed={this.state.authed} path={'/dashboard'} component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
