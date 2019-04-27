import { combineReducers } from 'redux';
import gradientReducer from './gradientReducer';

export default combineReducers({
  gradient: gradientReducer
})