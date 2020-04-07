

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
const initialState = {}
const middlewares = [thunkMiddleware];

const composedEnhancer = composeWithDevTools(
  applyMiddleware(...middlewares)
);
export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    rootReducer, preloadedState, composedEnhancer
  )
}