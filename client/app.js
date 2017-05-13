// Import angular dependencies

import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';
import uiRouter from 'angular-ui-router';

// Import Application Modules
import Main from './main';
import CardList from './cardList';
import NewCase from './newUsecase';
import { routeConfig } from './app.config';

// Import required styles
import 'angular-material/angular-material.scss';
import 'vis/dist/vis-timeline-graph2d.min.css';
import './app.scss';

// App configuration
angular.module('usecasesTimeline', ['ngMaterial', 'ngMessages', 'ngSanitize',
        uiRouter, Main, CardList, NewCase
    ])
    .config(routeConfig);

// Bootstrap Application
angular.element(document)
    .ready(() => {
        angular.bootstrap(document, ['usecasesTimeline'], {});
    });