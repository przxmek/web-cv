import angular from 'angular';

import webcvHeader from './webcvHeader.directive';
let directives = angular.module('webcv.core.directives', [webcvHeader]).name;

import templateConfig from './templateConfig.service';
let services = angular.module('webcv.core.services', [templateConfig]).name;

export default angular.module('webcv.core', [directives, services]).name;
