import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './blog.routes';
import BlogController from './blog.controller';

import './blog.css';

export default angular.module('webcv.blog', [uirouter])
    .config(routing)
    .controller('BlogController', BlogController)
    .name;