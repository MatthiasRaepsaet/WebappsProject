export default class Gitaren{
    constructor($http){
        "ngInject";
        this._$http = $http;
    }
    getAllGuitars(){
        return this._$http.get("http://localhost:3000" + "/guitars").then(function(response){
            return response.data;
        });
    }


}