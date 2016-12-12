function GitarenConfig($stateProvider) {
    "ngInject";
    $stateProvider.state('app.gitaren', {
            url: '/gitaren',
            controller: 'GitarenCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'gitaren/gitaren.html'
        });
}
export default GitarenConfig;