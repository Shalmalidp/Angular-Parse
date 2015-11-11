let AddController = function($scope, $http) {
  
  $scope.addWhiskey = (obj) => {
    console.log(obj);
  };

};

AddController.$inject = ['$scope', '$http'];

export default AddController;