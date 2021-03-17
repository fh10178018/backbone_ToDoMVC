var Backbone = require('backbone')
var toDoItem = (new (Backbone.View.extend({// 组件整合
  tagName: 'li',
  className: 'completed',
  render: function () {
    this.$el.append(`
      <input class="toggle" type="checkbox" checked>
      <label>Taste JavaScript</label>
      <button class="destroy"></button>
    `)
    return this
  }
}))).render()

var toDoList = (new (Backbone.View.extend({// 组件整合
  tagName: 'ul',
  className: 'todo-list',
  render: function () {
    this.$el.append(toDoItem.el)
    this.$el.append(toDoItem.el)
    return this
  }
}))).render()
module.exports = toDoList