import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import asyncComponent from '@fs/async-component'

// 异步加载组件
const asyncDemo = asyncComponent(() => import('pages/demo'))

const Routes = () => {
  return (
    <Router>
      <Route path="/demo" component={asyncDemo}></Route>
    </Router>
  )
}

export default Routes
