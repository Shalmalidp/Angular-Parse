let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.list', {
      url: '/',
      templateUrl: 'templates/list.tpl.html'
    })
    .state('root.single', {
      url: '/single/:id',
      templateUrl: 'templates/single.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;