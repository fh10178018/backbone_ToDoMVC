var Backbone = require('backbone')
var Input = require('../component/Input/index')
var List = require('../component/List/index')

var header = (new (Backbone.View.extend({// header组件视图
  tagName: 'header',
  className: 'header',
  render: function () { // 绑定渲染函数
    this.$el.append('<h1 style="font-size: 40px;line-height: normal;color: coral;top:-100px">基于Backbone的TodoMVC</h1>')
    this.$el.append(Input.el)
    return this
  }
}))).render()

var homeView = (new (Backbone.View.extend({ // 主界面组建视图
  tagName: 'section',
  className: 'todoapp',
  render: function () { // 绑定渲染函数
    this.$el.append(header.el) // 插入header元素
    this.$el.append(List.el) // 插入header元素
    return this
  }
}))).render()

module.exports = homeView