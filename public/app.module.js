var appModule = angular.module('CommentsFeed', ['ngRoute']);


appModule.controller("AppCtrl", function ($scope) {

})
appModule.config(function($routeProvider) {
  $routeProvider
        .when('/', {
            template: '<comments-feed comments="$resolve.comments.data"></comments-feed>',
            resolve: {
              comments: ['CommentsService', function (CommentsService) {
                return CommentsService.fetch();
              }]
            }
        }).otherwise({
                            redirectTo: '/'
                        });
});
