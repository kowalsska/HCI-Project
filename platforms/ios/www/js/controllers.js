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

  var data = Walk.all();
  var myPie = new Chart(document.getElementById("myChart").getContext("2d")).Doughnut(data, {
    animationSteps: 100,
    animationEasing: 'easeInOutQuart'	});


  var successHandler = function (pedometerData) {
    $scope.steps = pedometerData.numberOfSteps;
    alert("Walking!");
  };
  var onError = function (error) {
    alert("ERROR! " + error);
  };

  pedometer.startPedometerUpdates(successHandler, onError);




})

.controller('SettingsCtrl', function($scope){



})

.controller('HistoryCtrl', function($scope){



});
