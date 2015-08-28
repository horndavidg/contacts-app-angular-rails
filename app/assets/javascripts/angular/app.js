var contactsApp = angular.module("ContactsApp", ["ngRoute", "ngResource"]);

contactsApp.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] =
    $('meta[name=csrf-token]').attr('content');
}]);

contactsApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'ContactsController'
      })
      .when('/contacts/:id', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
      .when('/contacts/:id/edit', {
        templateUrl: 'partials/edit.html',
        controller: 'EditController'
      })
      .otherwise({ redirectTo: '/'})

}]);