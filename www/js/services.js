/**
 * Created by magdakowalska on 12/11/2015.
 */
angular.module('starter.services', [])

.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'magda123',
    level: 'Advanced Walker',
    face: 'img/magda.jpg'
  }, {
    id: 1,
    name: 'hansheng456',
    level: 'Eager Stroller',
    face: 'img/hansheng.jpg'
  }, {
    id: 2,
    name: 'hciAEuser',
    level: 'Competent Crawler',
    face: 'img/steve.jpg'
  }, {
    id: 3,
    name: 'testUser',
    level: 'Advanced Walker',
    face: 'img/alexs.jpg'
  }];

  return {
    all: function() {
      return friends;
    },
    remove: function(chat) {
      friends.splice(friends.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === parseInt(chatId)) {
          return friends[i];
        }
      }
      return null;
    },
    add: function(res) {
      var obj = {
        id: 4,
        name: res,
        level: 'Advanced Walker',
        face: 'img/default.png'
      };
      friends.push(obj);
    }
  };
})

.factory('Walk', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var data = [
    {
      value: $scope.stepsUser1,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Me"
    },
    {
      value: 130,
      color: "#1ABC9C",
      highlight: "#48C9B0",
      label: "testUser"
    }
  ];

  return {
    all: function () {
      return data;
    }
  }

})

.factory('History', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var history = [
      {
    chId: 1,
    oponentName: 'hansheng456',
    date: "10.11.2015",
    oponentPhoto: 'img/hansheng.jpg',
    steps: '5,689',
    won: 'Lost'
  }, {
    chId: 2,
    oponentName: 'hciAEuser',
    date: "2.11.2015",
    oponentPhoto: 'img/steve.jpg',
    steps: '6,237',
    won: 'Win'
  }, {
    chId: 3,
    oponentName: 'testUser',
    date: "30.10.2015",
    oponentPhoto: 'img/alexs.jpg',
    steps: '5,143',
    won: 'Lost'
  }];

  return {
    all: function() {
      return history;
    },
    remove: function(chat) {
      history.splice(history.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < history.length; i++) {
        if (history[i].id === parseInt(chatId)) {
          return history[i];
        }
      }
      return null;
    }
  };
})
