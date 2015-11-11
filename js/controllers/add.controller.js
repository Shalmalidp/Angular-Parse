let AddController = function($scope, $http, PARSE) {
  
  console.log(PARSE);

  $scope.addWhiskey = (obj) => {
    console.log(obj);
  };

};

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController;