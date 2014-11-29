angular.module('eventApp', [])
    .controller('eventListCtrl', function ($scope) {
        // Lession 5
        // Lession 5-1

        $scope.events = [
            {
                'date': '2014/11/29',
                'name': 'AngularJS 菁英班 - 初階班'
            },{
                'date': '2014/11/30',
                'name': 'AngularJS 菁英班 - 中階班'
            },{
                'date': '2014/12/01',
                'name': 'AngularJS 菁英班 - 高階班'
            }
        ];

        $scope.Test = function (){
            alert('test');
        };

    });
