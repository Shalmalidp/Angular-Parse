let SingleController = function($scope, $stateParams, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/whiskey/' + $stateParams.whiskeyId;

  // $http.get(url, PARSE.CONFIG).then( (res) => {

  //   $scope.singleWhiskey = res.data;

  // });

  $http({
    method: 'GET',
    url: url,
    headers: PARSE.CONFIG.headers,
    cache: true
  }).then( (res) => {
    $scope.singleWhiskey = res.data;
  });

};

SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleController;