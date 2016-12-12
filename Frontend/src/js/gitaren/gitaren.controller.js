class GitarenCtrl{
    constructor($http) {
        "ngInject";
        this.guitarList = null;
        this._$http = $http;
    }
        get(){
            $http({
                method: "GET",
                url: "http://localhost:3000/guitars"
            }).then(function mySucces(response) {
                guitarList = response.data;
                console.log("opgehaald");
            }, function myError(response) {
                console.log("niet opgehaald")
            });
        }

}

export default GitarenCtrl;