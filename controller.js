angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.pageNum = 1;
  $scope.getUsers = function() {
    mainService.getUsers($scope.pageNum).then(function(dataFromService) {
      $scope.users = dataFromService.data;
      $scope.totalPages = dataFromService.total_pages;
    });
  };

  $scope.getUsers();

  $scope.prev = function () {
    if ($scope.pageNum > 1) {
      $scope.pageNum--;
      $scope.getUsers();
  }};

  $scope.next = function() {
    if ($scope.pageNum < $scope.totalPages) {
      $scope.pageNum++;
      $scope.getUsers();
  }};
});
