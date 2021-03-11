define(function(require,exports,module) {
    'use strict';
    var Backbone = requier('backbone');
    var router = requier('./router');
    router();
    Backbone.history.start();
})
console.log('as')