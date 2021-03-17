var Backbone = require('backbone')
var homeView = require('../page/homeView')

var router = Backbone.Router.extend({
  routes: {
    "": "home"   // 主页
  },
  home: function () {
    homeView.$el.appendTo('body')  // 渲染主界面视图
  }
});

module.exports = new router()