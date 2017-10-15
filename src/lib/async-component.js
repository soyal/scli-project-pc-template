/**
 * 用于react router4 code splitting
 */
import React, {Component} from 'react'

export default (loadComponent) => {
  class AsyncComponent extends Component {
    constructor() {
      super()

      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const {default: component} = await loadComponent()

      this.setState({
        component: component
      })
    }

    render() {
      const C = this.state.component

      return (
        C ? <C {...this.props}></C> : null
      )
    }
  }

  return AsyncComponent
}