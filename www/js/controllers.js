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
    });

  },1000,0);


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

})

.controller('StatisticsCtrl', function($scope){

  var dataSteps = {
    labels: ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm"],
    datasets: [
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: [245, 356, 980, 780, 543, 420, 900]
      }
    ]
  };

  var mySteps = new Chart(document.getElementById("stepsChart").getContext("2d")).Bar(dataSteps, {
    animation: false,
    maintainAspectRatio: true,
    responsive: false
  });

  var dataCalories = {
    labels: ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm"],
    datasets: [
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  var myCalories = new Chart(document.getElementById("caloriesChart").getContext("2d")).Line(dataCalories, {
    animation: false,
    maintainAspectRatio: true,
    responsive: false
  });

  var dataEnv = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  };

  var myEnv = new Chart(document.getElementById("envChart").getContext("2d")).Radar(dataEnv, {
    animation: false,
    maintainAspectRatio: true,
    responsive: false
  });



});
