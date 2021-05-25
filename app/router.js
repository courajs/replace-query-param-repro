import EmberRouter from '@ember/routing/router';
import config from 'replace-query-param-repro/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('one');
  this.route('two');
});
