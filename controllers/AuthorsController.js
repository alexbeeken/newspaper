newspaper.controller('AuthorsCtrl', function AuthorsCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId);
  $scope.addAuthor = function() {
    $scope.beat.authors.push({ name: $scope.name, yearsEmployed: $scope.yearsEmployed, birthday: $scope.birthday });
    $scope.name = null;
    $scope.yearsEmployed = null;
    $scope.birthday = null;
  };
});
