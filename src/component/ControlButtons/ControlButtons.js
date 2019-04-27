import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCss } from '../../actions/gradientAction';
import { changeCss } from '../../actions/gradientAction';
import ORIENTATIONS from './orientationActions';

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
    console.log(nextProps);
  }

  async setGradientParameter(modifier, value) {
    await this.setState({[modifier]: value});
    this.props.changeCss(this.state);
  }

  render() {
    const orientationButtons = ORIENTATIONS.map(orientation => (
      <button key={orientation} type="button" onClick={() => this.setGradientParameter("orientationGradient", orientation)}>{orientation}</button>
    ));
    return (
      <div>
        <div className="style">
          <button type="button" onClick={() => this.setGradientParameter("typeGradient", "linear")}>Linear</button>
          <button type="button" onClick={() => this.setGradientParameter("typeGradient", "radial")}>Radial</button>
        </div>
        <div className="orientation">
          {orientationButtons}
        </div>
      </div>
    )
  }
}

const changingCss = (state) => ({
  css: state
});


export default connect(changingCss, { changeCss })(ControlButtons);