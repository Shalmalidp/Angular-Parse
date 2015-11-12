let WhiskeyService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/whiskey';

  this.getWhiskeys = function () {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  };

  this.getWhiskey = function (whiskeyId) {
    return $http({
      method: 'GET',
      url: url + '/' + whiskeyId,
      headers: PARSE.CONFIG.headers,
      cache: true
    });
  };

};

WhiskeyService.$inject = ['$http', 'PARSE'];

export default WhiskeyService;