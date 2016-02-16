exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var defferd = $.Deferred();
    defferd.resolve(value);
    return defferd.promise();
  },

  manipulateRemoteData: function(url) {
    var defferd = $.Deferred();

    $.ajax(url).then(function(op) {
      var people = $.map(op.people, function(person) {
        return person.name;
      });
      defferd.resolve(people.sort());
    });

    return defferd.promise();
  }
};
