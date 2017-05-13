import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component';

export default angular.module('Main', [uiRouter])
    .component('main', mainComponent)
    .name;