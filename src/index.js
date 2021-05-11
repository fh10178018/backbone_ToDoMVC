var Backbone = require('backbone')
var Router = require('./router/router.js');
require('./index.css')
require('./util/storageemitter')
Backbone.history.start(); // Router必须引入过来和它在一起