import Msite from '../pages/msite/miste'
import CateGory from '../pages/cateGory/cateGory'
import Cart from '../pages/cart/cart'
import Buy from '../pages/buy/buy'
import Personal from '../pages/personal/personal'

import MsiteChild1 from '../pages/msite/msiteChild1/msiteChild1'
import CateChild from '../pages/cateGory/cateChild/cateChild'

export default [
	// {
	// 	path: '路由路径',
	// 	component: 路由组件
	// }
	
	{
		path: '/msite',
		component: Msite,
		children: [
			{
				// path: '/msite/msiteChild1',
				path: 'msiteChild1',
				component: MsiteChild1
			}
		],
		meta: {
			isShowFooter: true
		}
	},
	{
		path: '/cateGory',
		component: CateGory,
		meta: {
			isShowFooter: true
		},
		name: 'cate',
		children: [
			{
				// path: '/msite/msiteChild1',
				path: '/cateGory/cateChild/:id',
				// path: 'cateChild',
				component: CateChild,
				name: 'cateChild'
			}
		],

	},
	{
		path: '/cart',
		component: Cart,
		meta: {
			isShowFooter: true
		}
	},
	{
		path: '/buy/:id',
		component: Buy,
		meta: {
			isShowFooter: true
		},
		name: 'Buy',
		// props: true // 布尔值, 将当前params参数导入对应路由组件的内部
		// props: { // 对象模式， 可以自定义任何内容， 需要在组件内部通过props接收
		// 	a: 1, 
		// 	b: 2
		// }
		
		// 函数模式： 1. 可以自定义props内容， 2. 可以声明形参接收$route信息实参
		props: route => ({a: 1, b:2, id: route.params.id, path: route.path})
	},
	{
		path: '/personal',
		component: Personal,
		meta: {
			isShowFooter: false
		}
	},
	{
		path: '/',
		redirect: '/cart'
	}
]