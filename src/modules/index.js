import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import auth from './auth'

export default combineReducers({
  form:  formReducer,
  router: routerReducer,
  counter,
  auth
})
