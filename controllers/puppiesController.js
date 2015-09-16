puppyApp.controller('puppyCtrl', [
  "$scope",
  "breedsService",
  "puppiesService",
  "$window",
  function($scope, breedsService, puppiesService, $window) {
    $scope.puppies = [];
    $scope.breeds = [];

    breedsService.getAllBreeds().then(
      function(response) { $scope.breeds = response.data; },
      function(data, status, headers, config) { console.log(status) }
    );

    $scope.getPuppies = function() {
      puppiesService.getAllPuppies().then(
        function(response) { $scope.puppies = response.data; },
        function(data, status, headers, config) { console.log(status) }
      );
    };

    $scope.getPuppies();

    $scope.newPuppy = {};

    $scope.submitPuppy = function(){
      
      console.log($scope.newPuppy);
      puppiesService.postPuppy($scope.newPuppy)
      .then(function(response){
        // console.log("Created puppy!");
        // console.log($scope.puppies.length);
        // console.log(response.data);
        // $scope.puppies.push(response.data);
        $window.location.reload();
        // $scope.getPuppies();
        // console.log($scope.puppies.length);
        // console.log($scope.puppies[$scope.puppies.length-1])
      }, function(){
        console.log("Failed to create pup:(");
      });

      // puppiesService.postPuppy($scope.newPuppy)
      //   .then(function(response){
      //     console.log("success");
      //     var newp = { name: response.data.name, breed_id: response.data.breed_id };
      //     console.log("before");
      //     console.log($scope.puppies);
      //     $scope.puppies.push(response.data);
      //     console.log("after");
      //     console.log($scope.puppies);
      //   });
    };

    $scope.adoptPuppy = function(id, index){
      puppiesService.deletePuppy(id)
      .then(function(){
        console.log("deleted pup");
        $scope.puppies.splice(index, 1);
      }, function(){
        console.log("failed to delete");
      });
    };
  }
]);