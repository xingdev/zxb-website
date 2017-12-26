import { Menu } from 'antd'
import React, { Component, Children } from 'react'
import {
  Link
} from 'react-router-dom'
const dataSource = [
  {
    key: 'home',
    label: '首页',
    path: '/'

  },
  {
    key: 'login',
    label: '登陆',
    path: '/login'
  },
]
export default class Header extends Component {
  state = {
    current: dataSource[0].key,
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    })
  }

  render() {
    return (
      <div className="header">
        <Menu
          className="zxb-menu"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {dataSource.map(item => <Menu.Item key={item.key}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>)}
        </Menu>
      </div>
    )
  }
}