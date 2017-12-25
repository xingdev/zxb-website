import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser, loginUser, changeForm } from '../redux/actions/home-actions'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './login.less'
import { Provider } from 'react-redux'
import HomeStore from '../redux/stores/store'
const FormItem = Form.Item

class NormalLoginForm extends Component {
  constructor() {
    super()

  }

  handleChangeForm = () => {
    let { dispatch } = this.props
    dispatch(changeForm(true))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { dispatch, isRegister } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(isRegister ? registerUser(values) : loginUser(values))
      }
    })
  }

  render() {
    const { user } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <h1>Log in:{user.userName}</h1>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="Username"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} type="password"
                     placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="javascript:void(0)">Forgot
              password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="javascript:void(0)" onClick={this.handleChangeForm}>register now!</a>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const LoginForm = connect((state) => {
  return {
    isRegister: state.isRegister,
    user: state.user,
    userList: state.userList,
  }
})(Form.create()(NormalLoginForm))

export default class Login extends Component {
  render() {
    return <Provider store={HomeStore}>
      <LoginForm/>
    </Provider>
  }
}