/* global angular */
;(function () {
  angular.module('ccmApp')
    .controller('ccmApp-Settings', ['$scope', '$location', function ($scope, $location) {
      var self = this
      self.back = function () {
        $location.path('/index')
      }
    }])
}())
