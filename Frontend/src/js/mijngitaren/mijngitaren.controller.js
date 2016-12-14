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
        console.log(this._Gebruikers._$window.localStorage.getItem("userData"));

        //Hier heb ik de gitaren hardcoded aan de gebruiker gelinkt, dus spijtig genoeg niet uit de databank
        this._Gebruikers.gebruiker.guitars.push({name:"MatthiasGitaar", type:"lespaul", brand:"esp"});
        this._Gebruikers.gebruiker.guitars.push({name:"MatthiasGitaar", type:"superstrat", brand:"ibanez"});

        this._Gebruikers._$window.localStorage.getItem("userData");
        console.log(this._Gebruikers.gebruiker.guitars[0].name);
        this.mijnGitaren = this._Gebruikers.gebruiker.guitars;
        console.log(this.mijnGitaren);
    }
}
export default MijnGitarenCtrl;