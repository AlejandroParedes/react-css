import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCss } from '../../actions/gradientAction';
import { changeCss } from '../../actions/gradientAction';
import ORIENTATIONS from './orientationActions';
import { SketchPicker } from 'react-color';

class ControlButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeGradient: 'linear',
      orientationGradient: 'top',
      ColorA: {hex: '#7ACF4C'},
      ColorB: {hex: '#44069B'},
      outputFormat: 'Hex',
      cssString: '',
      showingColorA: false,
      showingColorB: false
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  async setGradientParameter(modifier, value) {
    await this.setState({[modifier]: value});
    this.props.changeCss(this.state);
  }

  showColorPicker = (showingPicker) => {
    this.setState({
      [`showing${showingPicker}`]: !this.state[`showing${showingPicker}`],
    })
  };

  onChangeColor = (colorObj, color) => {
    this.setGradientParameter(color, colorObj);
  };

  render() {
    const orientationButtons = ORIENTATIONS.map(orientation => (
      <button key={orientation} type="button" onClick={() => this.setGradientParameter("orientationGradient", orientation)}>{orientation}</button>
    ));
    let background = {
      colorA: {
        backgroundColor: this.state.ColorA.hex
      },
      colorB: {
        backgroundColor: this.state.ColorB.hex
      }
    }
    return (
      <div>
        <div className="style">
          <button type="button" onClick={() => this.setGradientParameter("typeGradient", "linear")}>Linear</button>
          <button type="button" onClick={() => this.setGradientParameter("typeGradient", "radial")}>Radial</button>
        </div>
        <div className="orientation">
          {orientationButtons}
        </div>
        <div className="style">
          <button type="button" onClick={() => this.showColorPicker("ColorA")} style={background.colorA}>first color</button>
          {this.state.showingColorA ? <SketchPicker
            color={ this.state.ColorA.hex }
            onChangeComplete={ (colorObj) => this.onChangeColor(colorObj, 'ColorA') }/>: <div/>}
          <button type="button" onClick={() => this.showColorPicker("ColorB")} style={background.colorB}>Second Color</button>
          {this.state.showingColorB ? <SketchPicker
            color={ this.state.ColorB.hex }
            onChangeComplete={ (colorObj) => this.onChangeColor(colorObj, 'ColorB') }/>: <div/>}
        </div>
      </div>
    )
  }
}

const changingCss = (state) => ({
  css: state
});


export default connect(changingCss, { changeCss })(ControlButtons);