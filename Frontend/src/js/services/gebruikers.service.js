export default class Gebruikers{
    constructor($http, $window, $state){
        "ngInject";
        this._$http = $http;
        this._$window = $window;
        this._$state = $state;
    }
    getAlleGebruikers(){
        return this._$http.get("http://localhost:3000" + "/gebruikers").then(function(response){
            return response.data;
        });
    }

    checkUserService(gebruikerData, credentialData){
        "ngInject;"
        gebruikerData.forEach(function (gebruiker) {
            if(gebruiker.email === credentialData.email && gebruiker.password === credentialData.password){
                console.log("checkuser logged");

            }
        })
    }


}