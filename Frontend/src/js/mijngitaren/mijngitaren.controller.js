class MijnGitarenCtrl{
    constructor(Gebruikers, gebruikers){
        "ngInject";
        this.mijnGitaren = null;
        this._Gebruikers = Gebruikers;
        this.gebruikers = gebruikers;
        this.loadGitaren();
    }

    loadGitaren(){
        this._Gebruikers.getHuidigeGebruiker(this.gebruikers, this._Gebruikers._$window.localStorage.getItem("userData"), this._Gebruikers);
        this.mijnGitaren = this._Gebruikers.gebruiker;
        console.log(this.mijnGitaren.guitars);
    }
}
export default MijnGitarenCtrl;