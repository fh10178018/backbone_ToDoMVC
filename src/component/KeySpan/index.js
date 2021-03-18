/**
 * 类似键盘按键的一个按钮组件视图
 */

var Backbone = require('backbone')
require('./index.css')

var KeySpan = Backbone.View.extend({// 组件整合
  tagName: 'div',
  className: 'keySpan',
  initialize: function () {
    Backbone.on('inputFocus', this.onShow, this)
    Backbone.on('inputBlur', this.onHide, this)
  },
  render: function (options) {
    this.el.innerText = options
    return this
  },
  onShow: function () {
    this.$el.addClass("show") // 添加 show class
  },
  onHide: function () {
    this.$el.removeClass("show")
  }
})

module.exports = KeySpan