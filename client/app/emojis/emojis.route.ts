const route = function route($stateProvider) {
  $stateProvider
    .state('emojis', {
      parent: 'main',
      url: '/emojis',
      template: '<emojis></emojis>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
