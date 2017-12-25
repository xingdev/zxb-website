import React, { Component, Children } from 'react'
import Header from './header'
export function createLayout() {
  class Layout extends Component {
    constructor() {
      super()
    }

    render() {
      let { footer, className } = this.props
      return <div className={className}>
        <Header/>
        {this.props.children}
        {footer}
      </div>
    }
  }

  return Layout
}

export default createLayout()