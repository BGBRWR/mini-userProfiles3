angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function(pageNum) {
    var deferred =$q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=' + pageNum
    }).then(function(response){
      var parsedResponse = response.data;
      for(var i =0; i < parsedResponse.length; i++){
        parsedResponse[i].first_name = 'Ralf';
      }
      deferred.resolve(parsedResponse);
    });
    return deferred.promise;
  };

});
