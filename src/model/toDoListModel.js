/**
 * 数据模型，并绑定localstorage
 */
var Backbone = require('backbone')
var LocalStorage = require('backbone.localstorage');

/**
* 数据基本结构
*[
*  {
*    id:'', // 唯一性根据时间戳创建
*    name:'',
*    createTime: 000, // 创建时间戳
*    status: boolean  // 是否处于勾选状态
*  },
* ...
*]
*/

var model = Backbone.Model.extend({
  initialize: function () { // 数据初始化，自富属性，创建createTime
    var timestamp = new Date().getTime()
    if (!this.get("name")) alert("请输入你想做的事情！")
    if (!this.get("createTime")) this.set({ "createTime": timestamp })
    if (!this.get("id")) this.set({ "id": this.cid })
    if (!this.get("status")) this.set({ "status": false })
  }
})

var Collect = Backbone.Collection.extend({
  model: model,
  localStorage: new Backbone.LocalStorage("todos-backbone"),
  initialize: function () { // 实现数据localstorage初始化
    var models = this.localStorage.findAll()
    models.forEach(item => {
      this.add(item)
    })
  },
  delete: function (models) { // collection 好像没有delete，一个即删除缓存，又异步删除loaclstorage的方法
    this.remove(models) // 删除缓存中的model
    models.forEach(item => { // 删除 loacalstorage 中存储的数据
      this.localStorage.destroy(item)
    });
  }
});
var toDolist = new Collect; // 创建集合对象

module.exports = toDolist