var Backbone = require('backbone')
var Input = require('../Input')
var KeySpan = require('../KeySpan')

var Header = Backbone.View.extend({// header组件视图
  tagName: 'header',
  className: 'header',
  initialize: function () {
    this.keySpan = new KeySpan()
    this.input = new Input()
  },
  render: function () { // 绑定渲染函数
    this.$el.append('<h1 style="font-size: 40px;line-height: normal;color: coral;top:-100px">基于Backbone的TodoMVC</h1>')
    this.$el.append(this.input.el)
    this.$el.append(this.keySpan.el)
    this.keySpan.render("↲") // 渲染一个回车键
    this.input.render()
    return this
  }
})
module.exports = Header