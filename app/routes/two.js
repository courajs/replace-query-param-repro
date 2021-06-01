import Route from '@ember/routing/route';
import {next} from '@ember/runloop';

export default class TwoRoute extends Route {
  queryParams = {
    a: {
      replace: true,
      refreshModel: true,
    },
    b: {replace: true},
    c: {refreshModel: true},
  };

  afterModel(_,transition) {
  }

  model() {
    return 42;
  }

  setupController(controller, model, transition) {
    window.the_transition = transition;
    console.log(transition);
    super.setupController(controller, model, transition);
    controller.transition = transition;
  }
}
