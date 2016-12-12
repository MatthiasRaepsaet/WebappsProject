import angular from "angular";

let gitarenModule = angular.module("app.gitaren", []);

import GitarenConfig from "./gitaren.config";
gitarenModule.config(GitarenConfig);

import GitarenCtrl from "./gitaren.controller";
gitarenModule.controller(GitarenCtrl);

export default gitarenModule;