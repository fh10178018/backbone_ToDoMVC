var Backbone = require('backbone')
var checkboxAll = require('./checkboxAll')
var toDoList = require('./toDoList')
var List = (new (Backbone.View.extend({// 组件整合
  tagName: 'section',
  className: 'main',
  attributes: {
    type: "checkbox"
  },
  render: function () {
    this.$el.append(checkboxAll.el)
    this.$el.append(toDoList.el)
    return this
  }
}))).render()
module.exports = List