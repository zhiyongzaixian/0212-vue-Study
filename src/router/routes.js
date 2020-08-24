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
		path: '/buy',
		component: Buy,
		meta: {
			isShowFooter: true
		},
		name: 'Buy'
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
		redirect: '/cateGory'
	}
]