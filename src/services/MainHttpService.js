import {ENPOINT} from '../config/constants';

export default class MainHttpService {
  async post(url, data) {
    const postObj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    let result = await fetch(`${ENPOINT}${url}`, postObj);
    if(result.ok)
      return result.json();
    else
      throw result;
  }

  async get(url) {
    let result = await fetch(`${ENPOINT}${url}`);
    return result.json();
  }
}