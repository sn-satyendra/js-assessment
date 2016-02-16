exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var op = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        op.push(arr[i]);
      }
    }
    return op;
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    var op = [];
    for (var i = 0; i < arr.length; i++) {
      op.push(arr[i] * arr[i]);
    }
    return op;
  },

  findAllOccurrences: function(arr, target) {
    var op = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        op.push(i);
      }
    }
    return op;
  }
};
