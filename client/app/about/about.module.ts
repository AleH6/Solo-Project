import * as angular from 'angular';
import route from './about.route';
// import

const name = 'about';
const template = '/client/app/about/about.html'

namespace app.about {
  export class AboutController {
    constructor(
    ) {
    }
  }

  AboutController.$inject = [];
}

export default angular.module('app.about', [])
  .component(name, {
    templateUrl: template,
    controller: app.about.AboutController,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
