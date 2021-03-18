/**
 * footer渲染视图，主要是存放标签页
 */
var Backbone = require('backbone')
require('./index.css')

var Footer = Backbone.View.extend({
  tagName: 'a',
  className: 'footer',
  attributes: {
    href: 'https://github.com/fh10178018/backbone_ToDoMVC'
  },
  render: function () {
    this.$el.text('点击进入，项目GitHub库。')
    return this
  }
})
module.exports = Footer