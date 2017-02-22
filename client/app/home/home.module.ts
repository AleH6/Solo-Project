import * as angular from 'angular';
import route from './home.route';
// import

const name = 'home';
const template = '/client/app/home/home.html'

namespace app.home {
  export class HomeController {
    constructor(
    ) {
    }
  }

  HomeController.$inject = [''];
}

export default angular.module('app.home', [])
  .component(name, {
    templateUrl: template,
    controller: app.home.HomeController,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
