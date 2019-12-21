import Vue from 'vue'
import App from './App.vue'
import store from './store'

// 引入ant design组件库
import Antd from 'ant-design-vue'
import Notification from 'ant-design-vue/lib/notification'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
Vue.$notification = Notification

// 引入验证
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
extend('required', {
  ...required,
  message: '{_field_}是必须的'
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
