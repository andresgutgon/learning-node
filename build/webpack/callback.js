import gutil from 'gulp-util';
import notifier from 'node-notifier';

export default (task, err, stats) => {
  if (err) {
    throw new gutil.PluginError(task, err);
  }

  let title
    , msg;

  const errors = stats.toJson().errors;
  const warnings = stats.toJson().warnings;

  if (err || errors.length > 0) {
    title = 'Ooooooooooooooops!!!';
    msg = 'Error! Error! Error! Error! Error!';
  } else if (warnings.length > 0) {
    title = 'Warning!';
    msg = 'Check smth.';
  } else {
    title = 'Ready to rumble!';
    msg = 'A katumear!';
  }

  notifier.notify({
    title: title
  , message: msg
  , icon: false
  , sound: true
  });
};
