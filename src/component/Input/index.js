/*
toDoMVC input 输入组件
主要内容有视图，监听change和keydown，清空input，给collection添加model
*/

var Backbone = require('backbone')
var toDolist = require('../../model/toDoListModel')

var Input = Backbone.View.extend({// header组件视图
  tagName: 'input',
  className: 'new-todo',
  events: {
    "focus": "handleFocus",
    "blur": "handleBlur",
    "keydown": "handleFinsh"
  },
  attributes: {
    placeholder: "我能为你做什么？",
    autofocus: true
  },
  handleClear: function () { // 清空input
    this.$el.val('')
  },
  handleFinsh: function (event) { // 监听回车的回调函数
    if (event.keyCode === 13) {
      var curInputValue = event.target.value // 回车时，当前input的值
      if (curInputValue != "") {
        toDolist.create({ name: curInputValue })
        this.handleClear()
      } else {
        alert("输入不能为空")
      }
    }
  },
  handleFocus: function () {
    Backbone.trigger('inputFocus') // 输入框focus事件触发，并执行自定义事件，用于组件之间通信
  },
  handleBlur: function () {
    Backbone.trigger('inputBlur')
  }
})

module.exports = Input