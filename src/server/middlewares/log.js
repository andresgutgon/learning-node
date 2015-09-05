import logger from 'morgan';
import fs from 'fs';

export default (app, bundle) => {
  let env;

  env = app.get('env');

  if (env === 'production') {
    const logStream = fs.createWriteStream(`${process.cwd()}/log/production.${bundle}.log`, { flags: 'a' });

    app.use(logger('combined', { stream: logStream }));
  } else {
    app.use(logger('dev'));
  }
};

