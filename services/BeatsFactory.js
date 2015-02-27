newspaper.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [];
  factory.addBeat = function() {
    factory.beats.push({
      title: factory.beatTitle,
      id: factory.beats.length + 1,
      dateCreated: ((new Date()).toLocaleString()),
    });
    factory.beatTitle = null;
  };

  return factory;
})
