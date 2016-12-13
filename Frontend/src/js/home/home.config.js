function HomeConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.home', {
            url: '/',
            controller: 'HomeCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'home/home.html',
            resolve: {
                gebruikers: function (Gebruikers) {
                  return Gebruikers.getAlleGebruikers().then((gebruikers) => gebruikers)
                }
            }
        });

};

export default HomeConfig;
