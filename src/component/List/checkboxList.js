var Backbone = require('backbone')
var Input = (new (Backbone.View.extend({// 全选输入组件
  tagName: 'input',
  className: 'toggle',
  id: 'toggle-list',
  attributes: {
    type: "checkbox"
  }
}))).render()

var label = (new (Backbone.View.extend({// 绑定label
  tagName: 'label',
  attributes: {
    for: "toggle-all"
  }
}))).render()

var checkboxList = (new (Backbone.View.extend({// 组件整合
  tagName: 'input',
  className: 'toggle-all',
  id: 'toggle-all',
  attributes: {
    type: "checkbox"
  },
  render: function () {
    this.$el.append(Input.el)
    this.$el.append(label.el)
    return this
  }
}))).render()
module.exports = checkboxList