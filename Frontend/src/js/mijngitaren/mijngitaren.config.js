function MijnGitarenConfig($stateProvider) {
    "ngInject";
    $stateProvider.state('app.mijngitaren', {
        url: '/mijngitaren',
        controller: 'MijnGitarenCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'mijngitaren/mijngitaren.html',
        resolve: {
            gebruikers: function (Gebruikers) {
                return Gebruikers.getAlleGebruikers().then((gebruikers) => gebruikers)
            }
        }
    });
}
export default MijnGitarenConfig;