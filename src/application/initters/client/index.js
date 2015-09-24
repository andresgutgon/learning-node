import initter from './initter';
import config from 'src/server/config/server';
import routes from 'src/application/routes';
import reducers from 'src/application/reducers';
import setCookieDomain from 'src/application/libs/set-cookie-domain';

const cookieDomain = setCookieDomain(document.location.hostname);
const { googleAnalyticsId } = config;
const params = { routes, reducers, meta, cookieDomain, googleAnalyticsId };

export default initter(params);
