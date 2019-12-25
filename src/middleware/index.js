import thunk from 'redux-thunk'
import {applyMiddleware } from 'redux'
import logger from './logger'
import { composeWithDevTools } from 'redux-devtools-extension';


export default composeWithDevTools(applyMiddleware(thunk, logger))