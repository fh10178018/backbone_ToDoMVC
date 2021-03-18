var Backbone = require('backbone')
var _ = require('underscore')
var toDoListCollection = require('../../model/toDoListModel')

var deleteIDList = [];

var DeleteButton = Backbone.View.extend({ // 删除button
  tagName: 'button',
  className: 'destroy',
  events: {
    "click": "onClick"
  },
  onClick: function () { // 按钮点击时
    toDoListCollection.remove(deleteIDList)
  }
})

var Checkbox = Backbone.View.extend({ // 删除button
  tagName: 'input',
  className: 'toggle',
  attributes: {
    type: "checkbox"
  },
  events: {
    "click": "onClick"
  },
  onClick: function (event) { // 按钮点击时
    var id = this.$el.parent().attr("id") // 从父级获取id属性
    var model = toDoListCollection.get(id)
    if (event.target.checked) {
      deleteIDList.push(model)
    } else {
      deleteIDList.splice(deleteIDList.indexOf(model), 1)
    }
  }
})

var ToDoItem = Backbone.View.extend({// 组件整合
  tagName: 'li',
  className: 'editing',
  initialize: function () {
    this.button = new DeleteButton()
    this.checkbox = new Checkbox()
    this.listenTo(this.model, "change", this.render);
  },
  template: _.template(`
    <label><%- name %></label>
  `),
  events: {
    "click": 'onClick'
  },
  onClick: function () {
    if (this.checkbox.el.checked) {
      this.$el.attr("class", "completed")
    } else {
      this.$el.attr("class", "editing")
    }
  },
  render: function () {
    var model = this.model.toJSON()
    this.$el.attr('id', this.model.cid) // 添加id删除标签，用于删除
    this.$el.append(this.checkbox.render().el) // 加入删除Button
    this.$el.append(this.template(model)); // 将基于underscore渲染的模版渲染在当前视图标签里
    this.$el.append(this.button.render().el) // 加入删除Button
    return this
  }
})

var toDoList = (new (Backbone.View.extend({// 组件整合
  tagName: 'ul',
  className: 'todo-list',
  initialize: function () {
    this.listenTo(toDoListCollection, 'add', this.addItem) // 监听collection添加model时，执行回调函数
    this.listenTo(toDoListCollection, 'remove', this.remove)
  },
  addItem: function (model) { // 这里传参，传的是新添加的model
    var item = new ToDoItem({ model: model }) // 获取li模版
    this.$el.append(item.render().el) // 渲染并添加在列表中
  },
  remove: function (model) {
    this.$el.find("#" + model.cid).remove()
  },
  render: function () {
    return this
  }
}))).render()

module.exports = toDoList