exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    if (n < 2) {
      return 1;
    } else {
      return this.fibonacci(n - 2) + this.fibonacci(n - 1);
    }
  },

  validParentheses: function(n) {

  }
};
