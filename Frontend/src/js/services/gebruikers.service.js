export default class Gebruikers{
    constructor($http, $window, $state){
        "ngInject";
        this._$http = $http;
        this._$window = $window;
        this._$state = $state;
        this.gebruiker = null;
    }
    getAlleGebruikers(){
        return this._$http.get("http://localhost:3000" + "/gebruikers").then(function(response){
            return response.data;
        });
    }

    storeUser(gebruikerId){
        this._$window.localStorage.removeItem("userData");
        this._$window.localStorage.setItem("userData", gebruikerId);
        console.log("stored");
    }

    checkUserService(gebruikerData, credentialData, gebruikersService){
        "ngInject;"
        gebruikerData.forEach(function (gebruiker) {
            if(gebruiker.email === credentialData.email && gebruiker.password === credentialData.password){

                gebruikersService.storeUser(gebruiker._id);
                gebruikersService._$state.go("app.gitaren");
            }
        })
    }

    getHuidigeGebruiker(gebruikersData, gebruikersId, gebruikserService){
        gebruikersData.forEach(function (gebruiker) {
            if(gebruiker._id === gebruikersId){
                console.log("stuur gebruiker")
                gebruikserService.gebruiker = gebruiker;

            }
        })
    }

}