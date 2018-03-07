import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Button } from 'antd'

import './index.less'

@observer
class Demo extends Component {
  render() {
    const env = process.env.REACT_APP_FS_ENV
    return (
      <div className="demo">
        <p>123</p>
        <div>{env}</div>
        <Button type="primary">click</Button>
      </div>
    )
  }
}

export default Demo
