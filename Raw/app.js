// js/geetList.js
'use strict';


/**
 * Déclaration de l'application demoApp
 */
var Pingeetapp = angular.module('Pingeetapp', [
    // Dépendances du "module"
    'geetList',
    'clockApp'
]);

var clockApp = angular.module('clockApp', []);
    clockApp.controller('dateCtrl', ['$scope',
        function($scope)
        {
        // Retourne la date et l'heure courante
            var currentdate = new Date(); 
            $scope.time=
            {
            day: currentdate.getDate(),
            month: currentdate.getMonth(),
            year: currentdate.getFullYear(),
            hours: currentdate.getHours(),
            minutes: currentdate.getMinutes(),
            seconds: currentdate.getSeconds()
            };
        }]);

/**
 * Déclaration du module geetList
 */
var geetList = angular.module('geetList', []);
/**
 * Contrôleur de l'application "geet List" décrite dans le chapitre "La logique d'AngularJS".
 */
geetList.controller('pingeetCtrl', ['$scope',
    function ($scope)
    {                                           // Pour manipuler plus simplement les geetS au sein du contrôleur
                                                // On initialise les geetS avec un tableau vide : []
        var geetS = $scope.geetS = [];
        $scope.addGeet = function ()            // Ajouter un geet
        {   
            var user="babouin";
            var newGeet = $scope.newGeet.trim();// .trim() permet de supprimer les espaces 
                                                //inutiles en début et fin d'une chaîne de caractères
            if (!newGeet.length)                // éviter les geetS vides
            {return;}
            geetS.unshift(
            {// on ajoute le geet au tableau des geetS
                title: newGeet,
                user: user
            });
            $scope.newGeet = '';                // Réinitialisation de la variable newGeet
        };
    }
]);