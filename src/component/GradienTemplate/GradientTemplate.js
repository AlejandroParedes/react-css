import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeCss } from '../../actions/gradientAction';
import GradientTemplateService from '../../services/GradientTemplateService';

class GradientTemplate extends Component {
  gradientTemplateService;
  constructor(props) {
    super(props);
    this.gradientTemplateService = new GradientTemplateService();
    this.state = {
      name: '',
      user: '',
      template: {},
      templates: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({template: nextProps.css.gradient});
  }


  async componentDidMount() {
    let templates = await this.gradientTemplateService.getTemplates();
    this.setState({templates});
  }

  onSave = async () => {
    try {
      let newTemplate = await this.gradientTemplateService.saveTemplate(this.state);
      let templates = this.state.templates;
      templates.unshift(newTemplate);
      this.setState(templates);
    } catch(e) {
      console.log(e);
    }
  };

  onChangeValue = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  setTemplate = async (template) => {
    await this.setState({template});
    this.props.changeCss(this.state.template.template);
  };

  render() {
    const templates = this.state.templates.map((template, index) => (
      <button type="button" className="btn btn-secondary btn-block" key={index} onClick={() => this.setTemplate(template)}>{template.name} - {template.user}</button>
    ));
    return (
      <div className="col-12">
        <h3>Guarda ésta configuración</h3>
        <form>
          <div className="form-row">
            <div className="col">
              <input type="tex" name="user" className="form-control" placeholder="Nombre" value={this.state.user} onChange={this.onChangeValue}/>
            </div>
            <div className="col">
              <input type="tex" name="name" className="form-control" placeholder="Nombre de la plantilla" value={this.state.name}  onChange={this.onChangeValue}/>
            </div>
          </div>
          <div className="form-row mt-3">
            <button type="button" className="btn btn-success btn-block" onClick={this.onSave}>Guardar configuracion</button>
          </div>
        </form>
        <div className="row mt-3">
          <div className="col-12">
            <h4>Selecciona un template: </h4>
            <div className="btn-group-vertical w-100">
              {templates}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const changingCss = (state) => ({
  css: state
});

export default connect(changingCss, {changeCss})(GradientTemplate);