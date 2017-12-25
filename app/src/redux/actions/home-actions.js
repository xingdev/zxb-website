export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const CHANGE_FORM = 'CHANGE_FORM'

export function changeForm(isRegister) {
  return {
    type: CHANGE_FORM,
    isRegister
  }
}
export function registerUser(user) {
  return {
    type: 'REGISTER_USER',
    user
  }
}

export function loginUser(user) {
  return {
    type: 'LOGIN_USER',
    user
  }
}