function MijnGitarenConfig($stateProvider) {
    "ngInject";
    $stateProvider.state('app.mijngitaren', {
        url: '/mijngitaren',
        controller: 'MijnGitarenCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'mijngitaren/mijngitaren.html'
    });
}
export default MijnGitarenConfig;