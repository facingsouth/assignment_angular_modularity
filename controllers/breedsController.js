puppyApp.controller('breedCtrl', [
  "$scope",
  "breedsService",
  function($scope, breedsService) {
    $scope.breeds = [];

    breedsService.getAllBreeds().then(
      function(response) { $scope.breeds = response.data; console.log(response); },
      function(data, status, headers, config) { console.log(status) }
    );

  }
]);