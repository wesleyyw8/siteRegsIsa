app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('principal', {
			url: "/",
			views: {
				'topNavBar': {
					templateUrl: 'app/pages/topNavBar.html',
					controller: 'TopNavBarController'
				},
				'main': {
					templateUrl: 'app/pages/carousel.html'
					//controller: 'PersonListController'
				},
				'menu': {
					templateUrl: 'app/pages/menu.html'
				}
			}
		})

	$urlRouterProvider.otherwise('/');
});