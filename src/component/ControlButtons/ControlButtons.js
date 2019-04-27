import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCss } from '../../actions/gradientAction';
import ORIENTATIONS from './orientationActions';
import { SketchPicker } from 'react-color';
import './ControlButtons.scss';

class ControlButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeGradient: 'linear',
      orientationGradient: 'top',
      ColorA: {
        hex: '#7ACF4C',
        rgb: {
          a: 1,
          b: 76,
          g: 207,
          r: 122
        }
      },
      ColorB: {
        hex: '#44069B',
        rgb: {
          a: 1,
          b: 155,
          g: 6,
          r: 68
        }
      },
      outputFormat: 'hex',
      cssString: '',
      showingColorA: false,
      showingColorB: false
    };
  }

  componentDidMount() {
    this.props.changeCss(this.state);
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

  chunkButtons = () => {
    let initial,
        total,
        chunk = 3,
        orientationChunk = [];
    for (initial=0,total=ORIENTATIONS.length; initial<total; initial+=chunk) {
        orientationChunk.push(ORIENTATIONS.slice(initial,initial+chunk));
    }
    return orientationChunk;
  }

  render() {
    const orientationsChunk = this.chunkButtons();
    const orientationButtons = orientationsChunk.map((orientationGroup, oIndex) => {
      let buttons = orientationGroup.map((orientation) => {
        let button = (orientation != "center" || this.state.typeGradient != 'linear') ?
          (<button className="btn btn-light btn-block" type="button" onClick={() => this.setGradientParameter("orientationGradient", orientation)}>{orientation}</button>):
          (<span></span>);
          return (<div className="col-4" key={orientation}>
            {button}
          </div>)
      });
      return (<div className="row mt-3" key={oIndex}>
        {buttons}
      </div>);
    });
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
        <div className="style row">
          <div className="col-6">
            <button className="btn btn-light btn-block" type="button" onClick={() => this.setGradientParameter("typeGradient", "linear")}>Linear</button>
          </div>
          <div className="col-6">
            <button className="btn btn-light btn-block" type="button" onClick={() => this.setGradientParameter("typeGradient", "radial")}>Radial</button>
          </div>
        </div>
        <div className="orientation">
          {orientationButtons}
        </div>
        <div className="style row mt-3">
          <div className="col-6">
            <button className="btn btn-light btn-block" type="button" onClick={() => this.showColorPicker("ColorA")} style={background.colorA}>first color</button>
            {this.state.showingColorA ? <SketchPicker
              color={ this.state.ColorA.hex }
              onChangeComplete={ (colorObj) => this.onChangeColor(colorObj, 'ColorA') }/>: <div/>}
          </div>
          <div className="col-6">
            <button className="btn btn-light btn-block" type="button" onClick={() => this.showColorPicker("ColorB")} style={background.colorB}>Second Color</button>
            {this.state.showingColorB ? <SketchPicker
              color={ this.state.ColorB.hex }
              onChangeComplete={ (colorObj) => this.onChangeColor(colorObj, 'ColorB') }/>: <div/>}
          </div>
        </div>
        <div className="type row mt-3">
          <div className="col-6">
            <button className="btn btn-light btn-block" type="button" onClick={() => this.setGradientParameter("outputFormat", "hex")}>Hex</button>
          </div>
          <div className="col-6">
            <button className="btn btn-light btn-block" type="button" onClick={() => this.setGradientParameter("outputFormat", "rgb")}>RGBa</button>
          </div>
        </div>
      </div>
    )
  }
}

const changingCss = (state) => ({
  css: state
});


export default connect(changingCss, { changeCss })(ControlButtons);