import Controller from '@ember/controller';

export default class TwoController extends Controller {
  back() {
    window.history.back();
  }
}
