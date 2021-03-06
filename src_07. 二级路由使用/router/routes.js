import Msite from '../pages/msite/miste'
import CateGory from '../pages/cateGory/cateGory'
import Cart from '../pages/cart/cart'
import Buy from '../pages/buy/buy'
import Personal from '../pages/personal/personal'

import MsiteChild1 from '../pages/msite/msiteChild1/msiteChild1'

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
		]
	},
	{
		path: '/cateGory',
		component: CateGory
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/buy',
		component: Buy
	},
	{
		path: '/personal',
		component: Personal
	},
	{
		path: '/',
		redirect: '/msite'
	}
]