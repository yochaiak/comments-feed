appModule.service('CommentsService', ['$http', function ($http) {
  function fetch() {
      return $http.get('/api/comments');
  }

  function save(comment) {
      return $http.post('/api/comments', {
        comment: comment
      })
  }

  return {
    fetch: fetch,
    save: save
  }
}]);
