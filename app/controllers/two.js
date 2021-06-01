import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';

export default class TwoController extends Controller {
  @tracked transition;
  back() {
    window.history.back();
  }
}
