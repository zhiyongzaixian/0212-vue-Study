// 自定义插件
import Test from './Test.vue'


// 向外暴露
// 如果向外暴露的是对象的话，那么对象中必须有一个install方法
const test = {
	install(Vue){
		console.log('install()')
		Vue.component('Test', Test)
	}
}

export default test;