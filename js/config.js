let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.list', {
      url: '/',
      views: {
        sidebar: {
          template: '<p>I am a sidebar</p>'
        },
        content: {
          controller: 'ListController',
          templateUrl: 'templates/list.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      }
    })
    .state('root.single', {
      url: '/single/:whiskeyId',
      views: {
        content: {       
          controller: 'SingleController',
          templateUrl: 'templates/single.tpl.html'
        }
      }
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;