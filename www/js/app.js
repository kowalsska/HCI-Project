// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services', 'chart.js'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })
    .state('friends', {
      url: '/friendslist',
      templateUrl: 'templates/friends.html',
      controller: 'FriendsCtrl'
    })
    .state('walk', {
      url: '/walk',
      templateUrl: 'templates/walk.html',
      controller: 'WalkCtrl',
      cache: false
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html',
      controller: 'SettingsCtrl'
    })
    .state('history', {
      url: '/history',
      templateUrl: 'templates/history.html',
      controller: 'HistoryCtrl'
    })
    .state('statistics', {
      url: '/statistics',
      templateUrl: 'templates/statistics.html',
      controller: 'StatisticsCtrl'
    });

//http://i.imgur.com/oahGvMz.png
    $urlRouterProvider.otherwise("/");
});

