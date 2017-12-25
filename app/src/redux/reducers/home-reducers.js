import { combineReducers } from 'redux'
import { REGISTER_USER, LOGIN_USER, CHANGE_FORM } from '../actions/home-actions'

// store中可以定义页面中的初始状态
const initialState = {
  user: {},
  userList: [],
  isRegister: false
}

function isRegister(state = initialState.isRegister, action) {
  if (action.type === CHANGE_FORM) {
    return action.isRegister
  }

  return state

}

function user(state = initialState.user, action) {
  if (action.type === LOGIN_USER) {
    return action.user
  }

  return state
}

function userList(state = initialState.userList, action) {
  if (action.type === REGISTER_USER) {
    let list = state.slice(0)
    list.push(action.user)
    return list
  }

  return state
}

export const homeReducers = combineReducers({
  user,
  userList,
  isRegister
})