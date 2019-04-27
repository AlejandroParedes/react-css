import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCss } from '../../actions/gradientAction';
import { changeCss } from '../../actions/gradientAction';

class ControlButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeGradient: 'linear',
      orientationGradient: 'top',
      colorA: '#7ACF4C',
      colorB: '#44069B',
      outputFormat: 'Hex',
      cssString: ''
    };
  }

  componentWillReceiveProps(nextProps) {
  }

  async setGradientParameter(modifier, value) {
    await this.setState({[modifier]: value});
    this.props.changeCss(this.state);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.setGradientParameter("orientationGradient", "top left")}>top left</button>
        <button type="button" onClick={() => this.setGradientParameter("orientationGradient", "top")}>top</button>
        <button type="button" onClick={() => this.setGradientParameter("orientationGradient", "top right")}>top right</button>
        <button type="button" onClick={() => this.setGradientParameter("orientationGradient", "left")}>left</button>
        <button type="button" onClick={() => this.setGradientParameter("orientationGradient", "right")}>right</button>
        <button type="button" onClick={() => this.setGradientParameter("orientationGradient", "bottom left")}>bottom left</button>
        <button type="button" onClick={() => this.setGradientParameter("orientationGradient", "bottom")}>bottom</button>
        <button type="button" onClick={() => this.setGradientParameter("orientationGradient", "bottom right")}>bottom right</button>
      </div>
    )
  }
}

const changingCss = (state) => ({
  css: state
});


export default connect(changingCss, { changeCss })(ControlButtons);