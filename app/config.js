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
					templateUrl: 'app/pages/menu.html',
					controller: 'MenuController'

				}
			}
		})
		.state('historia', {
			url: "/historia",
			views: {
				'topNavBar': {
					templateUrl: 'app/pages/topNavBar.html',
					controller: 'TopNavBarController'
				},
				'main': {
					templateUrl: 'app/pages/historia.html'
					//controller: 'PersonListController'
				},
				'menu': {
					templateUrl: 'app/pages/menu.html',
					controller: 'MenuController'

				}
			}
		})
		.state('repertorio', {
			url: "/repertorio",
			views: {
				'topNavBar': {
					templateUrl: 'app/pages/topNavBar.html',
					controller: 'TopNavBarController'
				},
				'main': {
					templateUrl: 'app/pages/repertorio.html'
					//controller: 'PersonListController'
				},
				'menu': {
					templateUrl: 'app/pages/menu.html',
					controller: 'MenuController'

				}
			}
		})
		.state('fotos', {
			url: "/fotos",
			views: {
				'topNavBar': {
					templateUrl: 'app/pages/topNavBar.html',
					controller: 'TopNavBarController'
				},
				'main': {
					templateUrl: 'app/pages/fotos.html'
					//controller: 'PersonListController'
				},
				'menu': {
					templateUrl: 'app/pages/menu.html',
					controller: 'MenuController'

				}
			}
		})
		.state('videos', {
			url: "/videos",
			views: {
				'topNavBar': {
					templateUrl: 'app/pages/topNavBar.html',
					controller: 'TopNavBarController'
				},
				'main': {
					templateUrl: 'app/pages/videos.html'
					//controller: 'PersonListController'
				},
				'menu': {
					templateUrl: 'app/pages/menu.html',
					controller: 'MenuController'

				}
			}
		})
		.state('cds', {
			url: "/cds",
			views: {
				'topNavBar': {
					templateUrl: 'app/pages/topNavBar.html',
					controller: 'TopNavBarController'
				},
				'main': {
					templateUrl: 'app/pages/cds.html'
					//controller: 'PersonListController'
				},
				'menu': {
					templateUrl: 'app/pages/menu.html',
					controller: 'MenuController'

				}
			}
		})
		.state('contato', {
			url: "/contato",
			views: {
				'topNavBar': {
					templateUrl: 'app/pages/topNavBar.html',
					controller: 'TopNavBarController'
				},
				'main': {
					templateUrl: 'app/pages/contato.html'
					//controller: 'PersonListController'
				},
				'menu': {
					templateUrl: 'app/pages/menu.html',
					controller: 'MenuController'
				}
			}
		});

	$urlRouterProvider.otherwise('/');
});