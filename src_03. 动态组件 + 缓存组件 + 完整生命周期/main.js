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

new Vue({
  render: h => h(App),
	router
}).$mount('#app')
