/**
 * Get server error status.
 * If status not present in request set 500
 *
 * @param {String} status
 * @return {Integer}
 */
function getStatus (status) {
  if (!status) {
    return 500;
  }
  return parseInt(status, 10) >= 500 ? 500 : status;
}

export default (error, req, res, next) => {
  const status = getStatus(error.status);

  res.status(status);
  if (req.accepts('html')) {
    res.render(`errors/${status}`, { url: req.url, err: status });
  } else {
    res.sendStatus(status);
  }
};
