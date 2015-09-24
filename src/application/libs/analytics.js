export default {
  init (analytics_id) {
    this._injectAnalytics(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', analytics_id, 'auto');
    ga('require', 'displayfeatures');
  }
, sendPageview (path) {
    if (typeof ga !== 'undefined') {
      ga('set', 'page', path);
      ga('send', 'pageview');
    }
  }
, sendEvent (event) {
    if (typeof ga !== 'undefined' && event && event.category && event.action) {
      ga('send', 'event', event.category, event.action);
    }
  }
  /* eslint-disable */
, _injectAnalytics(i,s,o,g,r,a,m){
    i['GoogleAnalyticsObject']=r;
    i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
    a=s.createElement(o),m=s.getElementsByTagName(o)[0];
    a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
  }
  /* eslint-enable */
};

