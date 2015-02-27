newspaper.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [];
  factory.addBeat = function() {
    factory.beats.push({
      id: factory.beats.length + 1,
      dateCreated: ((new Date()).toLocaleString()),
      beatTitle: factory.beatTitle
    });
    factory.beatTitle = null;
  };
  return factory;
})
