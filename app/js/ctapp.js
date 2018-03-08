/* global angular */
const remote = require('electron').remote
;(function () {
  angular.module('ctApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/index', {
        controller: 'ctApp-Index',
        controllerAs: 'ctrl',
        templateUrl: 'templates/index.html'
      })
      .when('/settings', {
        controller: 'ctApp-Settings',
        controllerAs: 'ctrl',
        templateUrl: 'templates/settings.html'
      })
      .otherwise({ redirectTo: '/index' })
  }])
  .run(['$rootScope', function ($rootScope) {
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
      window.location = '/settings'
    }
  }])
}())
