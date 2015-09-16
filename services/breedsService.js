
puppyApp.factory("breedsService",
  ['$http',
  function($http){

    var obj = {};

    obj.getAllBreeds = function(){
      return $http.get('https://pacific-stream-9205.herokuapp.com/breeds.json');
    };

    obj.postNewBreed = function(breed){
      // return $http({
        
      //   method: 'POST',
        
      //   url: 'https://pacific-stream-9205.herokuapp.com/breeds.json',
        
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
        
      //   data: {breed: breed}
      
      // });
      console.log("new breed name:" + breed);
      return $http.post('https://pacific-stream-9205.herokuapp.com/breeds.json', {name: breed});
    };

    return obj;


}]);