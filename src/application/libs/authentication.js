import config from 'src/server/config/server';
import cookies from './cookies';

export default class Auth {
  constructor (context, domain) {
    this.cookie = cookies(context);
    this.setCookieParams = (months) => {
      const monthsFromNow = (quantity) => {
        const now = new Date();

        return (new Date(now.setMonth(now.getMonth() + quantity)));
      };

      const params = {};

      params.httpOnly = false;

      if (domain) {
        params.domain = domain;
      }

      if (months) {
        params.expires = monthsFromNow(months);
      }

      return params;
    };
  }

  login (email, token, params = {}) {
    const cookie_params = params.sessionOnly ? this.setCookieParams() : this.setCookieParams(6);

    this.cookie.set(config.session_cookie, email, cookie_params);

    if (params.cb) {
      params.cb();
    }
  }

  logout (cb) {
    this.cookie.set(config.session_cookie, 'bye-bye', this.setCookieParams(-1));

    if (cb) {
      return cb();
    }
  }

  getLogin () {
    return this.cookie.get(config.session_cookie);
  }

  getAuthHeaders () {
    if (this.getLogin()) {
      return {
        [config.user_header]: 'Pending User ID Header'
      };
    }

    return false;
  }

  isLoggedIn () {
    const { cookie } = this;

    return !!cookie.get(config.session_cookie);
  }
}
