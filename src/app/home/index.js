import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

import './home.css';

export default angular.module('webcv.home', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;