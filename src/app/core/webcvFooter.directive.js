import angular from 'angular';

function webcvFooter() {
    return {
        template: require('./webcvFooter.directive.html')
    }
}

export default angular.module('webcv.core.directives.webcvFooter', [])
    .directive('webcvFooter', webcvFooter)
    .name;