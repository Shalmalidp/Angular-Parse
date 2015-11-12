let WhiskeyFactory = function() {
  
  let foo = function () {
    return 'bar from factory';
  };

  return {
    baz: foo
  };

};

WhiskeyFactory.$inject = [];

export default WhiskeyFactory;