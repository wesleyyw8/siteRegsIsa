app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('list', {
			url: "/",
			views: {
				'topNavBar': {
					templateUrl: 'app/pages/topNavBar.html',
					controller: 'TopNavBarController'
				}/*,
				'main': {
					templateUrl: 'templates/list.html',
					controller: 'PersonListController'
				},
				'search': {
					templateUrl: 'templates/searchform.html',
					controller: 'PersonListController'
				}*/
			}
		})

	$urlRouterProvider.otherwise('/');
});