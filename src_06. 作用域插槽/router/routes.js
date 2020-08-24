import Msite from '../pages/msite/miste'
import CateGory from '../pages/cateGory/cateGory'
import Cart from '../pages/cart/cart'
import Buy from '../pages/buy/buy'
import Personal from '../pages/personal/personal'

export default [
	// {
	// 	path: '路由路径',
	// 	component: 路由组件
	// }
	
	{
		path: '/msite',
		component: Msite
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