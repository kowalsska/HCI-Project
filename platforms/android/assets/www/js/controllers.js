/**
 * Created by magdakowalska on 12/11/2015.
 */
angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $state){


})

.controller('NotificationController', function($scope, $cordovaLocalNotification, $ionicPlatform) {


  //$ionicPlatform.ready(function(){
  //  $cordovaLocalNotification.schedule({
  //    id: 1,
  //    title: 'WALK',
  //    text: "Keep walking!",
  //    data: {
  //      customProperty: 'custom value'
  //    }
  //  }).then(function (result) {
  //    console.log('Notification 1 triggered');
  //  });
  //})

})

.controller('FriendsCtrl', function($scope, Friends, $ionicPopup){

  $scope.friends = Friends.all();
  $scope.remove = function(friend) {
    Friends.remove(friend);
  };

  $scope.addFriend = function() {
    var addNewFriend = $ionicPopup.prompt({
      title: 'Add a friend',
      subTitle: 'Please type in username of your friend'
    });
    addNewFriend.then(function(res) {
        Friends.add(res);
    });
  }

})

.controller('WalkCtrl', function($scope, $interval, $cordovaLocalNotification){

  //Mocking up steps counter by interval counter
  $scope.stepsUser1 = 1;
  $scope.stepsUser2 = 1;
  $interval(function(){
    //console.log($scope.steps++);
    $scope.stepsUser1++;

    if($scope.stepsUser1 % 2 == 0) {
      $scope.stepsUser2++;
    }

    var data = [
      {
        value: $scope.stepsUser1,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Me"
      },
      {
        value: $scope.stepsUser2,
        color: "#1ABC9C",
        highlight: "#48C9B0",
        label: "testUser"
      }
    ];

    var myPie = new Chart(document.getElementById("myChart").getContext("2d")).Doughnut(data, {
      animation: false,
      maintainAspectRatio: true,
      responsive: false
    });

    $cordovaLocalNotification.schedule({
      id: 1,
      title: 'WALK',
      text: "You made " + $scope.stepsUser1 + " steps in current challenge.",
      data: {
        customProperty: 'custom value'
      }
    }).then(function (result) {
      console.log('Notification 1 triggered');
    });

  },1000,0);

  //setTimeout(function(){
  //
  //}, 2000);
  //


  //var myPie = new Chart(document.getElementById("myChart").getContext("2d")).Doughnut(data, {
  //  animationSteps: 100,
  //  animationEasing: 'easeInOutQuart'	});

  //!!Pedometer doesn't work on my Android phone
    //var successHandler = function (pedometerData) {
    //  $scope.steps = pedometerData.numberOfSteps;
    //};
    //var onError = function (error) {
    //  alery("ERROR!" + error);
    //};
    //pedometer.startPedometerUpdates(successHandler, counter());




})

.controller('SettingsCtrl', function($scope){



})

.controller('HistoryCtrl', function($scope, History, $ionicPopup){

  $scope.history = History.all();

  $scope.showAlert = function() {
    $ionicPopup.alert({
      title: 'Can\'t start new challenge!',
      template: 'You\'re have an active challenge at the moment'
    });
  };

});
