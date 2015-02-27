var newspaper = angular.module('newspaper', ['ui.router']);

newspaper.config(function($stateProvider) {
  $stateProvider.state('links', {
    url: "",
    templateUrl: "partials/.html",
    controller: 'LinksCtrl'
  });
