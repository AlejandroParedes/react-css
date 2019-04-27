import {GET_CSS, CHANGE_CSS} from '../actions/types';

const initialState = {
  typeGradient: '',
  orientationGradient: '',
  colorA: '',
  colorB: '',
  outputFormat: '',
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
        item: action.payload
      };
    default:
      return state;
  }
};