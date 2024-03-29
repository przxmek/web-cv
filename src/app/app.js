// Custom styles
import '../assets/css/style.css';


import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

import core from './core';
import blog from './blog';
import home from './home';

angular.module('webcv', [uirouter, core, blog, home])
    .config(routing);


