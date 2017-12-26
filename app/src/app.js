import React, { Component } from 'react'
import Layout from './component/layout'
import './app.less'
import Home from './component/home'
import Login from './component/login'
import Blog from './component/blog'
import {
  BrowserRouter as R,
  Route,
} from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <R>
      <Layout className="app">
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/:id" component={Blog}/>
      </Layout>
    </R>

  }
}

