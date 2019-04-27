import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCss } from '../../actions/gradientAction';

class ControlButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeGradient: '',
      orientationGradient: '',
      colorA: '',
      colorB: '',
      outputFormat: '',
      cssString: ''
    };
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}



export default connect(null, { getCss })(ControlButtons);