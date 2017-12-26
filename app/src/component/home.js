import React, { Component, Children } from 'react'
import { Carousel } from 'antd'
import Card from './card'
const ds = [1, 2, 3, 4]
export default class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="cat">
          <h3>热门文章</h3>
        </div>
        <div className="content-box">
          {ds.map(o => <Card key={o}/>)}
        </div>
      </div>
    )
  }
}