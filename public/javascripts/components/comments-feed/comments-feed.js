
// we should use webpack and ES6 syntax, but this is execrise so lets just make things work :)

appModule.component('commentsFeed', {
  templateUrl: 'javascripts/components/comments-feed/comments-feed.html',
  controllerAs: 'commentsFeed',
  controller: ['$scope', 'CommentsService', function ($scope, CommentsService) {
    var vm = this;

    vm.newComment = {};

    vm.save = function () {
      CommentsService.
        save(this.newComment).
        then(function (httpResponse) {
          vm.comments.push(httpResponse.data);
          vm.newComment = {};
        })
    }
  }],
  bindings: {
    comments: '='
  }
})
