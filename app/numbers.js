exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
    var largeNum = 1000000000;
    return ((a * largeNum) * (b * largeNum)) / (largeNum * largeNum);
  }
};
