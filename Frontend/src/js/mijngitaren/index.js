import angular from "angular";

let mijngitarenModule = angular.module("app.mijngitaren", []);

import MijnGitarenConfig from "./mijngitaren.config";
mijngitarenModule.config(MijnGitarenConfig);

import MijnGitarenController from "./mijngitaren.controller";
mijngitarenModule.controller("MijnGitarenCtrl",MijnGitarenController);

export default mijngitarenModule;