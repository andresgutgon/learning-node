import request from 'axios';
import config from 'src/server/config/server';

export default (params) => {
  const method = params.method;
  const url = `${params.host || config.api_path}${params.path}`;
  const responseType = 'json';
  const headers = {
    'Content-Type': 'application/json'
  , Accept: `application/vnd.${config.api_name}.${config.api_version}+json`
  };

  if (params.auth) {
    Object.assign(headers, params.auth);
  }

  const request_params = { method, url, responseType, headers };

  if (params.data) {
    request_params.data = params.data;
  }

  return request(request_params);
};

