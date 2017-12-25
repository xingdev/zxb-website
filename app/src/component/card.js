import React, { Component, Children } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image"><img src="http://lorempixel.com/400/200" alt=""/></div>
        <div className="card-content">
          <h1 className="title">
            some title
          </h1>
        </div>
      </div>
    )
  }
}