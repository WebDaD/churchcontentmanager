/* global angular */
;(function () {
  angular.module('ctApp')
    .controller('ctApp-Settings', ['$scope','$location',  function ($scope, $location) {
      var self = this
      self.back = function () {
        $location.path('/index')
      }
    }])
}())
