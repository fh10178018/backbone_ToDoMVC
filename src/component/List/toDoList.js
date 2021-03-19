/**
 * 实现toDoList列表视图
 */
var Backbone = require('backbone')
var _ = require('underscore')
var toDoListCollection = require('../../model/toDoListModel')
var getTime = require('../../util/getTime')

var deleteIDList = []; // 该队列，用于多删除

var DeleteButton = Backbone.View.extend({ // 删除button
  tagName: 'button',
  className: 'destroy',
  events: {
    "click": "onClick"
  },
  onClick: function () { // 按钮点击时
    toDoListCollection.delete(deleteIDList)
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
  initialize: function () {
    if (this.model.get("status")) this.$el.prop("checked", true);
    else this.$el.prop("checked", false);
  },
  onClick: function (event) { // 按钮点击时
    if (event.target.checked) { // 点击成功，存入删除队列中，否则移除队列
      deleteIDList.push(this.model)
    } else {
      deleteIDList.splice(deleteIDList.indexOf(this.model), 1)
    }
    console.log(this.model)
    this.model.save({ "status": event.target.checked }) // 记录状态到数据中,并同步修改localstorage
  }
})

var ToDoItem = Backbone.View.extend({// 组件整合
  tagName: 'li',
  className: 'editing',
  initialize: function () {
    this.$el.attr("id", this.model.cid) // 添加id方便删除
    // 给子视图传递model，方便数据操作
    this.button = new DeleteButton({ model: this.model })
    this.checkbox = new Checkbox({ model: this.model })
    this.listenTo(this.model, "add", this.render); // 当add时，更新数据，但是不能是change，出于业务考虑
  },
  template: _.template(`
    <label><%- name %><small>创建时间：<%- createTime %></small></label>
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
    var item = this.model.toJSON()
    item["createTime"] = getTime(item.createTime) // 将数据中的时间戳转为时间
    this.$el.append(this.checkbox.render().el) // 加入删除Button
    this.$el.append(this.template(item)); // 将基于underscore渲染的模版渲染在当前视图标签里
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
    toDoListCollection.models.forEach(item => { // 根据localstorage, 实现数据初始化
      this.addItem(item)
      if (item.status) { // 
        deleteIDList.push(item)
      }
    });
    return this
  }
}))).render()

module.exports = toDoList