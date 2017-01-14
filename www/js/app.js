var ionicExample = angular.module('starter', ['ionic', 'ngCordova','ngCordovaOauth']);

ionicExample.controller("OauthExample", function($scope, $cordovaOauth) {

    $scope.googleLogin = function() {
        $cordovaOauth.google("CLIENT_ID_HERE", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {
            alert(JSON.stringify(result));
        }, function(error) {
            alert(error);
        });
    }

});