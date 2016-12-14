import angular from 'angular';

let componentsModule = angular.module('app.components', []);
import AlleGitaren from './alle-gitaren.directive';
componentsModule.directive('alleGitaren', AlleGitaren);

export default componentsModule;
