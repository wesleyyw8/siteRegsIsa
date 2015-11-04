app.controller('MenuController', function ($scope, $state) {
	$scope.currentPage = $state.current.name;
	console.log($scope.currentPage);
	$scope.menuClick = function(name){
		$state.go(name);
	}
});