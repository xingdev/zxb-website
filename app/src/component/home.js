import React, { Component, Children } from 'react'
import { Carousel } from 'antd'
import Card from './card'
const ds = [1, 2, 3, 4]
export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <div className="card-wrapper">
          {ds.map(key => <Card key={key}/>)}
        </div>
      </div>
    )
  }
}