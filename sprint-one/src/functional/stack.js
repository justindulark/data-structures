var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var size = someInstance.size;
    storage[size] = value;
  };

  someInstance.pop = function() {
    var size = someInstance.size;
    var deleted;

    deleted = storage[size];
    delete storage[size];
    return deleted;
  };

  someInstance.size = function() {
    var size = 0;
    if(Object.keys(storage).length > 0 && typeof storage === 'object') {
      for(var i = 0; i <= Object.keys(storage).length; i++) {
        size++;
      }
    } else {
      return 0;
    }
    return size;
  };

  return someInstance;
};
