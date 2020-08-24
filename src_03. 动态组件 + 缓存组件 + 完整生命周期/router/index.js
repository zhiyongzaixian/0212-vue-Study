import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter);

// 1. 创建路由器
const router = new VueRouter({
	mode: 'hash', // 路由模式: hash history
	routes
});

export default router;