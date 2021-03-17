var Backbone = require('backbone')
var Input = (new (Backbone.View.extend({// 全选输入组件
  tagName: 'input',
  className: 'toggle-all',
  id: 'toggle-all',
  attributes: {
    type: "checkbox"
  }
}))).render()

var Label = (new (Backbone.View.extend({// 绑定label
  tagName: 'label',
  attributes: {
    for: "toggle-all"
  }
}))).render()

var checkboxAll = (new (Backbone.View.extend({// 组件整合
  tagName: 'input',
  className: 'toggle-all',
  id: 'toggle-all',
  attributes: {
    type: "checkbox"
  },
  render: function () {
    this.$el.append(Input.el)
    this.$el.append(Label.el)
    return this
  }
}))).render()

module.exports = checkboxAll