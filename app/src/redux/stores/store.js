import { createStore, applyMiddleware } from 'redux'
import { homeReducers } from '../reducers/home-reducers'
import thunkMiddleware from 'redux-thunk'

function createLogs() {
  return ({ dispatch, getState }) => next => action => {
    console.log(action)
    console.log('beforeState', getState())
    next(action)
    console.log('nextState', getState())
  }
}
const logs = createLogs()
const createStoreWithMiddleWare = applyMiddleware(thunkMiddleware, logs)(createStore)
export default createStoreWithMiddleWare(homeReducers)