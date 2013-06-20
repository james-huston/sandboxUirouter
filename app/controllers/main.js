angular.module('sandbox')

.controller('MainController', [
  '$scope',
  '$state',
  '$stateParams',
  function ($scope, $state, $stateParams) {
    $scope.name = 'blarg!';
  }
]);
