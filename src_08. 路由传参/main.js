import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'

Vue.config.productionTip = false
Vue.config.errorHandler = (errObj, errVM, errMsg) => {
	console.log('------ 全局错误捕获 -------');
	console.log(errObj);
	console.log(errVM); // 错误组件实例 msiteChild1
	console.log(errMsg);
}

// 事件总线设置
// 构造函数的显示原型对象 === 其实例的隐式原型对象
// Vue.prototype === vm.__proto__

Vue.prototype.$EventBus = new Vue();

new Vue({
  render: h => h(App),
	router
}).$mount('#app')
