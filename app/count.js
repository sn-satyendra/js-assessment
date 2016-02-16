exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    var t;

    function startCounting() {
      console.log(start++);

      if (start <= end) {
        t = setTimeout(startCounting, 100);
      }
    }

    startCounting();

    return {
      cancel: function() {
        if (t) {
          clearTimeout(t);
        }
      }
    };
  }
};
