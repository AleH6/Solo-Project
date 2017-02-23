import * as angular from 'angular';
import route from './emojis.route';
import controller from './emojis.controller';

const name = 'emojis';
const template = '/client/app/emojis/emojis.html'

namespace app.emojis {
  export class EmojisController {
    constructor(
    ) {
    }
  }

  EmojisController.$inject = [];
}

export default angular.module('app.emojis', [])
  .component(name, {
    templateUrl: template,
    controller: controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
