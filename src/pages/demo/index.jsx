import React, { Component } from 'react'

import './index.less'

class Demo extends Component {
  render() {
    const env = process.env.REACT_APP_FS_ENV
    return (
      <div className="demo">
        <p>123</p>
        <div>{env}</div>
      </div>
    )
  }
}

export default Demo
