function GitarenConfig($stateProvider) {
    "ngInject";
    $stateProvider.state('app.gitaren', {
        url: '/gitaren',
        controller: 'GitarenCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'gitaren/gitaren.html',
        resolve: {
            gitaren: function (Gitaren) {
                return Gitaren.getAllGuitars().then((gitaren) => gitaren)
            }
        }
    });
}
export default GitarenConfig;