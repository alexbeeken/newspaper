var newspaper = angular.module('newspaper', ['ui.router']);

newspaper.config(function($stateProvider) {
  $stateProvider.state('beats', {
    url: "",
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('beats.authors', {
    url: "/:beatId",
    templateUrl: "partials/beats.authors.html",
    controller: 'AuthorsCtrl'
  });
});
