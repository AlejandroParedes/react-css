import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GradientContent.scss';

class GradientContent extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.refs.show.setAttribute('style', nextProps.css.gradient.cssString);
  }

  render() {
    return (
      <div className="gradient-content">
        <div className="show" ref="show"></div>
      </div>
    )
  }
}

const changingCss = (state) => ({
  css: state
});

export default connect(changingCss, {})(GradientContent);