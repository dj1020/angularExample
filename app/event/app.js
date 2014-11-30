angular.module('eventApp',
[
    'ngRoute',
    'eventControllers'
]).config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/events', {
                templateUrl: "app/event/templates/lessonList.html",
                controller: "eventListCtrl"
            }).
            when('/events/:eventId', {
                templateUrl: "app/event/templates/lessonDetail.html",
                controller: "eventDetailCtrl"
            }).
            otherwise({
                redirectTo: '/events'
            });
}]);