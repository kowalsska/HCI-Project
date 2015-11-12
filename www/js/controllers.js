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

.controller('WalkCtrl', function($scope){



})

.controller('SettingsCtrl', function($scope){



})

.controller('HistoryCtrl', function($scope){



});
