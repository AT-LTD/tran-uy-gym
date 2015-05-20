
var currentUser;

var myApp = angular.module('myApp', [
  'ngRoute',
  'centerControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/service', {
      templateUrl: 'partials/service.html',
      controller: 'ServiceController'
    }).
    // when('/product/:productId', {
    //   templateUrl: 'partials/product-details.html',
    //   controller: 'ProductDetailsCtrl'
    // }).
    when('/schedule', {
      templateUrl: 'partials/schedule.html',
      controller: 'ScheduleController'
    }).
    when('/about-centers', {
      templateUrl: 'partials/about-centers.html',
      controller: 'AboutCentersCtrl'
    }).
    when('/about-missions', {
      templateUrl: 'partials/about-missions.html',
      controller: 'AboutMissionsCtrl'
    }).
    when('/about-trainers', {
      templateUrl: 'partials/about-trainers.html',
      controller: 'AboutTrainersCtrl'
    }).
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    }).
        when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl'
    }).
        when('/profile-details', {
      templateUrl: 'partials/profile-details.html',
      controller: 'ProfileCtrl'
    }).
    when('/register-class', {
      templateUrl: 'partials/register-class.html',
      controller: 'RegisterClassCtrl'
    }).
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);