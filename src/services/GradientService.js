export default class GradientService {

  cssString = '';
  getCss() {
    return this.cssString;
  }

  changeCss(gradientObj) {
    this.cssString = `
      background: ${gradientObj.ColorA.hex};
      background: -webkit-${gradientObj.typeGradient}-gradient(${gradientObj.orientationGradient}, ${gradientObj.ColorA.hex}, ${gradientObj.ColorB.hex});
      background: -moz-${gradientObj.typeGradient}-gradient(${gradientObj.orientationGradient}, ${gradientObj.ColorA.hex}, ${gradientObj.ColorB.hex});
      background: ${gradientObj.typeGradient}-gradient(${gradientObj.orientationGradient}, ${gradientObj.ColorA.hex}, ${gradientObj.ColorB.hex});
    `;
    console.log(this.cssString);
    return;
  }
}