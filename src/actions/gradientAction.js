import {GET_CSS, CHANGE_CSS} from '../actions/types';
import GradientService from '../services/GradientService';

const gradientService = new GradientService();

export const changeCss = (gradientObj) => async dispatch => {
  gradientService.changeCss(gradientObj);
  dispatch({
    type: CHANGE_CSS,
    payload: gradientService.getCss()
  })
}

export const getCss = () => async dispatch => {
  dispatch({
    type: GET_CSS,
    payload: gradientService.getCss()
  })
}