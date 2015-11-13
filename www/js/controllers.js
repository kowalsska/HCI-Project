/**
 * Created by magdakowalska on 12/11/2015.
 */
angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $state){


})

.controller('FriendsCtrl', function($scope, Friends){

  $scope.friends = Friends.all();
  $scope.remove = function(friend) {
    Friends.remove(friend);
  };

})

.controller('WalkCtrl', function($scope, Walk){

  $scope.chartlabels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.chartseries = ['Series A', 'Series B'];
  $scope.chartdata = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  var data = Walk.all();

  var myPie = new Chart(document.getElementById("myChart").getContext("2d")).Doughnut(data, {
    animationSteps: 100,
    animationEasing: 'easeInOutQuart'	});


})

.controller('SettingsCtrl', function($scope){



})

.controller('HistoryCtrl', function($scope){



});
