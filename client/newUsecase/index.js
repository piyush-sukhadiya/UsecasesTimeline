import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newCaseComponent from './newCase.component';
import newCaseService from './newCase.service';

export default angular.module('newCase', [uiRouter])
    .config(function($stateProvider) {
        $stateProvider.state('new', {
            url: '/new',
            template: "<new-case></new-case>"
        })
    })
    .service('newCaseService', newCaseService)
    .component('newCase', newCaseComponent)
    .name;