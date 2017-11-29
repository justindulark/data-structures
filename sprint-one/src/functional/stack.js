var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {

  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    var size = 0;
    // loop through object
    for(var key in storage) {
      // if object has own property
      if(storage.hasOwnProperty(key)) {
        // increment size
        size++;
      }
    }
    //return size
    return size;
  };

  return someInstance;
};
