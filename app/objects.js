exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {
    var op = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        op.push(key + ': ' + obj[key]);
      }
    }
    return op;
  }
};
