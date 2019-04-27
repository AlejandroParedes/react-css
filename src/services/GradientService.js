export default class GradientService {

  cssString = '';
  getCss() {
    return this.cssString;
  }

  changeCss(gradientObj) {
    let colors = this.setColor(gradientObj);
    this.cssString = `
background: ${colors.colorA};
background: -webkit-${gradientObj.typeGradient}-gradient(${gradientObj.orientationGradient}, ${colors.colorA}, ${colors.colorB});
background: -moz-${gradientObj.typeGradient}-gradient(${gradientObj.orientationGradient}, ${colors.colorA}, ${colors.colorB});
background: ${gradientObj.typeGradient}-gradient(${gradientObj.orientationGradient}, ${colors.colorA}, ${colors.colorB});
    `;
    return;
  }

  setColor(gradientObj) {
    let colorA = '';
    let colorB = '';
    if(gradientObj.outputFormat === "hex") {
      colorA = gradientObj.ColorA.hex;
      colorB = gradientObj.ColorB.hex;
    } else {
      colorA = `rgba(${gradientObj.ColorA.rgb.r}, ${gradientObj.ColorA.rgb.g}, ${gradientObj.ColorA.rgb.b}, ${gradientObj.ColorA.rgb.a})`;
      colorB = `rgba(${gradientObj.ColorB.rgb.r}, ${gradientObj.ColorB.rgb.g}, ${gradientObj.ColorB.rgb.b}, ${gradientObj.ColorB.rgb.a})`;
    }
    return {colorA, colorB};
  }
}