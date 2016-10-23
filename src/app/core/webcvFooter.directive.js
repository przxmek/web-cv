import angular from 'angular';

function webcvFooter() {
    return {
        restrict: 'E',
        scope: {},
        template: require('./webcvFooter.directive.html'),
        link: function (scope) {
            scope.name = 'Przemek Kuczyński';
            scope.description = 'Quality Web Design, Ui / UX Design. Part-time or Fulltime.';
            scope.copyright = '© 2016 Przemysław Kuczyński.';

            scope.cv = {};
            scope.cv.links = [
                {title: 'English', link: '#cv-pdf-english'},
                {title: 'German', link: '#cv-pdf-german'},
                {title: 'Spanish', link: '#cv-pdf-spanish'}
            ];

            scope.media = {};
            scope.media.facebook = 'https://facebook.com';
            scope.media.twitter = 'https://twitter.com';
            scope.media.pinterest = 'https://pinterest.com';
            scope.media.instagram = 'https://instagram.com';
            scope.media.youtube = 'https://youtube.com';
        }
    }
}

export default angular.module('webcv.core.directives.webcvFooter', [])
    .directive('webcvFooter', webcvFooter)
    .name;