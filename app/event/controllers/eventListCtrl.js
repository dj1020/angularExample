angular.module('eventApp', [])
    .controller('eventListCtrl', function ($scope) {
        // Lession 5
        // Lession 5-1

        $scope.limit = 3;
        $scope.events = [
            {
                'date': '2014/11/29',
                'name': 'AngularJS 菁英班 - 初階班',
                'price': 20000.123
            },{
                'date': '2014/11/30',
                'name': 'AngularJS 菁英班 - 中階班',
                'price': 35000.456
            },{
                'date': '2014/12/01',
                'name': 'AngularJS 菁英班 - 高階班',
                'price': 50000.789
            },{
                'date': '2014/12/05',
                'name': 'Backbone.js 菁英班 - 上',
                'price': 15000
            },{
                'date': '2014/12/06',
                'name': 'Backbone.js 菁英班 - 下',
                'price': 15000
            }
        ];

        $scope.clickMe = function (){
            alert('test');
        };

    });
