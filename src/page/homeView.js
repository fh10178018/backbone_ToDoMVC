var Backbone = require('backbone')
var List = require('../component/List')
var Header = require('../component/Header')


var homeView = new (Backbone.View.extend({ // 主界面组建视图
  tagName: 'section',
  className: 'todoapp',
  initialize: function () {
    this.header = new Header()
    this.list = new List()
    this.render()
  },
  render: function () { // 绑定渲染函数
    this.$el.append(this.header.el) // 插入header元素
    this.$el.append(this.list.el) // 插入header元素\
    this.header.render()
    this.list.render()
    return this
  }
}))
module.exports = homeView