import React, { Component, Children } from 'react'

export default class Blog extends Component {
  render() {
    let { match } = this.props
    return (
      <div className="blog">
        <div>
          <h3>ID: {match.params.id}</h3>
        </div>
      </div>
    )
  }
}