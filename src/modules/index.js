import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import login from './login'

export default combineReducers({
  form:  formReducer,
  router: routerReducer,
  counter,
  login
})
