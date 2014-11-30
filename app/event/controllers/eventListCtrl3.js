angular.module("eventControllers", [])
    .controller('eventListCtrl', function ($scope, $http) {

        $http.get('/example3/app/event/data/event-data.json').success(function (data) {
            $scope.events = data;
        });

        $scope.reverses = [
            { 'name': '最新在前', 'shade': false },
            { 'name': '最新在後', 'shade': true }
        ];

        $scope.sortFields = [
            {name : "Date", value: "date"},
            {name : "Name", value: "name"},
            {name : "Price", value: "price"}
        ];

        $scope.reverseVale = $scope.reverses[0];
        $scope.predicate   = $scope.sortFields[0];

    })
    .controller('eventDetailCtrl', function ($scope, $http) {

        //$http.get('app/event/data/event-data.json').success(function (data) {
        //    $scope.events = data;
        //});

    });
