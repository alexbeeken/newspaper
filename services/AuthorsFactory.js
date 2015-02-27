newspaper.factory('AuthorFactory', function AuthorFactory() {
  var factory = {};
  factory.beats.authors = [];
  factory.addAuthor = function() {
    factory.beats.push({
      id: factory.beats.length + 1,
      dateCreated: ((new Date()).toLocaleString()),
      beatTitle: factory.beatTitle
    });
    factory.beatTitle = null;
  };
  return factory;
})
