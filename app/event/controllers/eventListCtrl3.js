angular.module("eventApp", [])
    .controller('eventListCtrl3', function ($scope, $http) {

        $scope.test = "my hello";

        $http.get('app/event/data/event-data.json').success(function (data) {
            $scope.events = data;
            // console.log(data);
        });

    });
