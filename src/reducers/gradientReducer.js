import {GET_CSS, CHANGE_CSS} from '../actions/types';
import { defaultGridConfig } from '../component/ControlButtons/gradientTypes';

const initialState = {
  ...defaultGridConfig,
  cssString: ''
};

export default function (state = initialState, action)  {
  switch(action.type) {
    case GET_CSS:
      return {
        ...state,
        css: action.payload
      };
    case CHANGE_CSS:
      return {
        ...state,
        ...action.template,
        cssString: action.payload
      };
    default:
      return state;
  }
};