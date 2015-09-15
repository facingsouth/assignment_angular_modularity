
puppyApp.factory("breedsService",
  ['$http',
  function($http){

    var obj = {};

    obj.getAllBreeds = function(){
      return $http.get('https://pacific-stream-9205.herokuapp.com/puppies.json');
    };

    return obj;


}]);