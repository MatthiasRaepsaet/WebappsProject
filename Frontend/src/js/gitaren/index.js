import angular from "angular";

let gitarenModule = angular.module("app.gitaren", []);

import GitarenConfig from "./gitaren.config";
gitarenModule.config(GitarenConfig);

import GitarenController from "./gitaren.controller";
gitarenModule.controller("GitarenCtrl", GitarenController);

export default gitarenModule;