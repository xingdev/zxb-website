import React, { Component, Children } from 'react'
import {
  Link
} from 'react-router-dom'
export default class Card extends Component {
  render() {
    return (
      <div className="item-box">
        <div className="info-box">
          <div className="info-row title-row">
            <h3>
              <Link to="/netflix">NetflixJava进阶（七）正确理解Thread
                Local的原理与适用场景</Link>
            </h3>
          </div>
          <div className="meta-row title-row">
            <div className="tag">前端</div>
            <div className="label">
              画猪·
            </div>
            <div className="label">
              22小时之前·
            </div>
            <div className="label">
              18次阅读
            </div>
          </div>
        </div>
      </div>
    )
  }
}