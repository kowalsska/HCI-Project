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
    level: 'Eager Stroller',
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

  });
