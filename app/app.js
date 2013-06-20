
angular.module('sandbox', ['ui.state'])

.config(
  [
    '$stateProvider',
    '$routeProvider',
    function ($stateProvider, $routeProvider) {

      var indexMain = {
        templateUrl: '/app/views/main.tpl.html',
        controller: 'MainController'
      };

      var indexLeft = {
        template: "Hello World!"
      };

      var itemMain = {
        template: "honk"
      };

      $stateProvider
        .state('index', {
          url: '/index',
          views: {
            'main': indexMain,
            'left': indexLeft
          }
        })
        .state('index.item', {
          url: '/index/item/:itemId',
          views: {
            'main@index': itemMain
          }
        });
    }
  ])

.run([
    '$rootScope',
    '$state',
    '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ])

.controller('AppController', [
    '$scope',
    '$state',
    function ($scope, $state) {
      //$state.transitionTo('index');
    }
  ]);
