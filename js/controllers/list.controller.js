let ListController = function($scope, $http, PARSE, WhiskeyService, WhiskeyFactory) {

  console.log(WhiskeyService.foo);
  console.log(WhiskeyFactory.baz());
  
  let url = PARSE.URL + 'classes/whiskey';

  $http({
    url: url,
    headers: PARSE.CONFIG.headers,
    method: 'GET',
    cache: true
  }).then ( (res) => {
    $scope.whiskeys = res.data.results;
  });


};

ListController.$inject = ['$scope', '$http', 'PARSE', 'WhiskeyService', 'WhiskeyFactory'];

export default ListController;