import Vue from 'vue'
import { Checkbox, Cascader, Select, Option, Popover, Button } from 'element-ui'
import App from './App.vue'

// 导入组件库
// import { VMultiCascader } from '../packages/index.js'
// Vue.component(VMultiCascader.name, VMultiCascader)

import VMultiCascader from '../packages/index.js'
Vue.use(VMultiCascader)

// 注册组件库
Vue.use(Checkbox)
Vue.use(Cascader)
Vue.use(Select)
Vue.use(Option)
Vue.use(Popover)
Vue.use(Button)


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
