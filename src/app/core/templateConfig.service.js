import angular from 'angular';

class TemplateConfig {
    constructor() {
        this.layoutStyleOpts = {
            'wide': {
                name: 'Wide',
                value: 1
            },
            'boxed': {
                name: 'Boxed',
                value: 2
            }
        };
        this.colorSchemeOpts = {
            'default': {
                name: 'Default',
                value: 'default'
            },
            'greyscale': {
                name: 'Greyscale',
                value: 'greyscale'
            },
            'blue': {
                name: 'Blue',
                value: 'blue'
            },
            'red': {
                name: 'Red',
                value: 'red'
            }
        };

        this.layoutStyle = this.layoutStyleOpts['boxed'];
        this.colorSchemeOpts = this.colorSchemeOpts['greyscale'];
    }
}

export default angular.module('webcv.core.services.templateConfig', [])
    .service('TemplateConfig', TemplateConfig)
    .name;