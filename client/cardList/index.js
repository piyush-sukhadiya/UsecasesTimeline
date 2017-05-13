import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cardListComponent from './cardList.component';
import cardListService from './cardList.service';
import TimeLineComponent from './timeline/timeline.component';

export default angular.module('CardList', [uiRouter])
    .config(function($stateProvider) {
        $stateProvider.state('cardlist', {
            url: '/',
            template: "<card-list></card-list>"
        })
    })
    .service('cardListService', cardListService)
    .component('cardList', cardListComponent)
    .component('timeline', TimeLineComponent)
    .name;