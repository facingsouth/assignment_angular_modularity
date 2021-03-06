puppyApp.factory("puppiesService",
  ['$http',
  function($http){

    var obj = {};

    obj.getAllPuppies = function(){
      return $http.get('https://pacific-stream-9205.herokuapp.com/puppies.json');
    };

    obj.postPuppy = function(puppy){
      return $http({
        
        method: 'POST',
        
        url: 'https://pacific-stream-9205.herokuapp.com/puppies.json',
        
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        },

        dataType: 'json',
        
        data: JSON.stringify(puppy)
      
      });
      // return $http.post('https://pacific-stream-9205.herokuapp.com/puppies.json', puppy);
    };

    obj.deletePuppy = function(id){
      return $http({
        
        method: 'DELETE',
        
        url: 'https://pacific-stream-9205.herokuapp.com/puppies/'+id+'.json',
        
        headers: {
          'Content-Type': 'application/json'
        }
        
        // data: puppy
      
      });
    };

    return obj;


}]);