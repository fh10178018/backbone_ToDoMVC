define([
    'require',
    'exports',
    'module'
], function(require, exports, module) {
    'use strict';
    
    var Backbone = require('backbone');
    var Router=Backbone.Router.extend({
        routes:{
            '(/)':'index'
        },
        index: function (category) {
            require('./view/index')({
                category: parseInt(category, 10) || 0
            });
        },
    })
    var router = new Router();
    dispatcher.on('router.navigate',function (fragment,options) {
        router.navigate(fragment,options)
    })
    module.exports = function () {
        return router;
    };
});