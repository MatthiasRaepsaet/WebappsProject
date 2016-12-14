class HomeCtrl {
    constructor(AppConstants, $state, gebruikers, Gebruikers, $window) {
        'ngInject';
        this._$window = $window;
        this.gebruikers = gebruikers;
        this.appName = AppConstants.appName;
        this._$state = $state;
        this._Gebruikers = Gebruikers;
        //console.log(gebruikers);
        this.formData = null;
    }

    checkUser() {

        this._Gebruikers.checkUserService(this.gebruikers, this.formData, this._Gebruikers);
        console.log(this.gebruikers)
        //this._Gebruikers._$window.localStorage.setItem("userData", this.gebruikers[0]._id);
        //console.log(this._Gebruikers._$window.localStorage.getItem("userData"));
        //this._Gebruikers.testlog();
        //this._Gebruikers._$state.go("app.gitaren");
    }
}

export default HomeCtrl;
