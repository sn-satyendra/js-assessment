exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {

  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    var fn = function(arg) {
      return str + ', ' + arg;
    };
    return fn;
  },

  makeClosures: function(arr, fn) {
    var op = [];
    var innerFn = function(val) {
      return function() {
        return fn(val);
      };
    };
    for (var i = 0, len = arr.length; i < len; i++) {
      op.push(innerFn(arr[i]));
    }
    return op;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
