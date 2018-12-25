import Vue from 'vue'
import { Checkbox, Cascader, Select, Option, Popover } from 'element-ui'
import App from './App.vue'

// 导入组件库
import MultiCascader from './../packages/index'
// 注册组件库
Vue.use(Checkbox)
Vue.use(Cascader)
Vue.use(Select)
Vue.use(Option)
Vue.use(Popover)
Vue.use(MultiCascader)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
