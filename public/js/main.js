// 'use strict';
// var Backbone = require(['backbone']);
// var router = require('./router');
// router();
var ToDoItem = Backbone.Model.extend({})
var store = new ToDoItem({ title: 'asd' })
var ToDoItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'item-task',
    id: 'item1',
    attributes: {
        style: "background-color:red;"
    },
    Model: store,
    render: function () { // 绑定渲染函数
        this.$el.text(this.Model.get('title'))
        return this
    }
})
var view = new ToDoItemView()
console.log(view)
view.render().$el.appendTo('body') // 手动调用render，就会渲染界面
store.on('change', function () { // 当model值发生变化时，重新渲染界面
    view.render()
})
// Backbone.history.start();