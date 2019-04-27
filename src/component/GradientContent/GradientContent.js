import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highlight from'react-highlight';
import './GradientContent.scss';

class GradientContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cssString: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    this.refs.show.setAttribute('style', nextProps.css.gradient.cssString);
    this.setState({cssString: nextProps.css.gradient.cssString});
  }

  render() {
    return (
      <div className="gradient-content">
        <div className="show" ref="show"></div>
        <Highlight language='css'>
          {this.state.cssString}
        </Highlight>
      </div>
    )
  }
}

const changingCss = (state) => ({
  css: state
});

export default connect(changingCss, {})(GradientContent);