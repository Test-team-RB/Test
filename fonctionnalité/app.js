'use strict';
var app = angular.module('myApp', []);

var utilisateursDatabase = [{
    'login': 'neebah',
    'password': 'neebah'
}];



/*app.controller('MainCtrl', function LoginController($scope) {
    $scope.connexion = function () {
        for (var i in utilisateursDatabase) {
            var utilisateur = utilisateursDatabase[i];
            if (_.isEqual(utilisateur, $scope.identifiants)) {
                user.status = true;
            }
        }
    }
});
*/
var app = angular.module('myApp', []);

app.controller('MainCtrl', function ($scope) {
    $scope.connexion = function () {
        for (var i in utilisateursDatabase) {
            var utilisateur = utilisateursDatabase[i];
            if (_.isEqual(utilisateur, $scope.identifiants)) {
                user.status = true;
            }
        }
    }
});