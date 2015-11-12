let SingleController = function($scope, $stateParams, WhiskeyService) {
  
  WhiskeyService.getWhiskey($stateParams.whiskeyId).then( (res) => {
    $scope.singleWhiskey = res.data;
  });

};
SingleController.$inject = ['$scope', '$stateParams', 'WhiskeyService'];
export default SingleController;