var Backbone = require('backbone')

/*
* 数据基本结构
*[
*  {
*    id:'', // 唯一性根据时间戳创建
*    name:'',
*    createTime: 000, // 时间戳
*  },
* ...
*]
*/

var valueToObject = function (value) {//生成对应的数据格式
  var timestamp = new Date().getTime()
  return {
    name: value,
    createTime: timestamp
  }
}

var model = Backbone.Model.extend({
  set: function () {
    arguments[0] = valueToObject(arguments[0].name) // 富于属性
    Backbone.Model.prototype.set.apply(this, arguments);
  }
})

var Collect = Backbone.Collection.extend({
  model: model
});
var toDolist = new Collect; // 创建集合对象

module.exports = toDolist