var Backbone = require('backbone')
var Input = (new (Backbone.View.extend({// header组件视图
  tagName: 'input',
  className: 'new-todo',
  attributes: {
    placeholder: "我能为你做什么？",
    autofocus: true
  }
}))).render()

module.exports = Input