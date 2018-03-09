/* global angular */
const remote = require('electron').remote
;(function () {
  angular.module('ccmApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/index', {
        controller: 'ccmApp-Index',
        controllerAs: 'ctrl',
        templateUrl: 'templates/index.html'
      })
      .when('/settings', {
        controller: 'ccmApp-Settings',
        controllerAs: 'ctrl',
        templateUrl: 'templates/settings.html'
      })
      .otherwise({ redirectTo: '/index' })
  }])
  .run(['$rootScope','$location', function ($rootScope, $location) {
    $rootScope.window = remote.getCurrentWindow()
    $rootScope.closeApp = function () {
      $rootScope.window.close()
    }
    $rootScope.minimizeApp = function () {
      $rootScope.window.minimize()
    }
    $rootScope.maximizeApp = function () {
      if (!$rootScope.window.isMaximized()) {
        $rootScope.window.maximize()
      } else {
        $rootScope.window.unmaximize()
      }
    }
    $rootScope.settings = function () {
      $location.path('/settings')
    }
  }])
}())
