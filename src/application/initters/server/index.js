import initter from './initter';
import config from 'src/server/config/server';
import routes from 'src/application/routes';
import reducers from 'src/application/reducers';
import head from './head';
import * as AuthActions from 'src/application/actions/auth-actions';

import getAsset from 'src/application/libs/get-asset';
import setCookieDomain from 'src/application/libs/set-cookie-domain';

export default (req, res, next) => {
  const { bundle } = config;
  const cookieDomain = setCookieDomain(req.headers.host);
  const params = {
    bundle
  , routes
  , reducers
  , head
  , AuthActions
  , cookieDomain
  , locals: {
      js_asset: getAsset(bundle, 'js')
    , css_asset: getAsset(bundle, 'css')
    , vendor_asset: getAsset('vendor', 'js')
    }
  };

  initter(req, res, next, params);
};

