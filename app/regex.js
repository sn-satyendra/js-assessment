exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter: function(str) {

  },

  endsWithVowel: function(str) {
    return (/[aeiouAEIOU]$/).test(str);
  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },
  isUSD: function(str) {

  }
};
