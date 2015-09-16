puppyApp.controller('puppyCtrl', [
  "$scope",
  "breedsService",
  "puppiesService",
  function($scope, breedsService, puppiesService) {
    $scope.puppies = [];
    $scope.breeds = [];
    $scope.tableDisplay = true;

    breedsService.getAllBreeds().then(
      function(response) { $scope.breeds = response.data; console.log(response); },
      function(data, status, headers, config) { console.log(status) }
    );

    $scope.createNewBreed = function(){

      breedsService.postNewBreed($scope.puppyBreed)
      .then(function(response){
        
        console.log(response.data)
        $scope.breeds.push(response.data);
        console.log("created new breed");
      
      }, function(){
        console.log("failed to post new breed");
      
      });
    };

    $scope.toggleTable = function(){
      $scope.tableDisplay = !$scope.tableDisplay;
    };

    puppiesService.getAllPuppies().then(
      function(response) { $scope.puppies = response.data; console.log(response); },
      function(data, status, headers, config) { console.log(status) }
    );

    $scope.completePuppyBreed = function(breed){
      $scope.puppyBreed = breed.name;
      $scope.tableDisplay = true;
    }

    $scope.submitPuppy = function(){
      var newPuppy = {
                        name: $scope.puppyName,
                        breed_id: $scope.puppyBreed
                     };

      puppiesService.postPuppy(newPuppy)
      .then(function(response){
        console.log(response);
        console.log("Created puppy!");
        $scope.puppies.push(response.data);
        console.log($scope.puppies);
      }, function(){
        console.log("Failed to create pup:(");
      });
    };

    $scope.adoptPuppy = function(id){
      puppiesService.deletePuppy(id)
      .then(function(){
        console.log("deleted pup");
      }, function(){
        console.log("failed to delete");
      });
    };
  }
]);