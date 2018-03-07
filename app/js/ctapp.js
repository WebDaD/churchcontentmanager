/* global angular */
const remote = require('electron').remote
;(function () {
  angular.module('ctApp', [])
  .controller('ctApp-Main', ['$scope', function ($scope) {
    var self = this
    self.window = remote.getCurrentWindow()
    self.closeApp = function () {
      self.window.close()
    }
    self.minimizeApp = function () {
      self.window.minimize()
    }
    self.maximizeApp = function () {
      if (!self.window.isMaximized()) {
        self.window.maximize()
      } else {
        self.window.unmaximize()
      }
    }
  }])
}())
