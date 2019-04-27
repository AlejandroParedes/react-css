import MainHttpService from './MainHttpService';

export default class GradientService extends MainHttpService {
  async getTemplates() {
    return super.get('/template');
  }

  async saveTemplate(template) {
    return super.post('/template', template);
  }
}