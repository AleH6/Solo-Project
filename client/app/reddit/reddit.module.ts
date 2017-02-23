import * as angular from 'angular';
import route from './reddit.route';
import RedditController from './reddit.controller';

const name = 'reddit';
const template = '/client/app/reddit/reddit.html'

export default angular.module('app.reddit', [])
  .component(name, {
    templateUrl: template,
    controller: RedditController,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
