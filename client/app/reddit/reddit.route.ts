const route = function route($stateProvider) {
  $stateProvider
    .state('reddit', {
      parent: 'main',
      url: '/reddit',
      template: '<reddit></reddit>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
