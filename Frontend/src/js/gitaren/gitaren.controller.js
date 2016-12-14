class GitarenCtrl {
    constructor(gitaren, Gebruikers){
        "ngInject";
        this._Gebruikers = Gebruikers;
        this.gitaren = gitaren;
        console.log(this.gitaren);
    }

}

export default GitarenCtrl;