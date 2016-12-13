import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import GitarenService from "./gitaren.service";
servicesModule.service("Gitaren", GitarenService);



export default servicesModule;
