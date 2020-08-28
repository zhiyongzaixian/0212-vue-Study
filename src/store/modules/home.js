const state = {
	initData: '初始化数据测试',
	personArr: []
}

// 同步修改
const mutations = {
	// 同步修改
	changePersonArr(state, personArr){
		state.personArr = personArr
	}
	// 异步修改
	/* 
	 1. 在mutation中异步修改数据，可以修改，但是Vue的开发工具无法捕获到最新的状态数据
	 2. 思考： 为什么要设计mutation只同步修改数据
			1) 为了安全， 重要点： 数据是集中管理，可以多个组件共享(既可以获取Vuex的数据，还能修改Vuex的数据)
			2) 异步任务什么时候执行结束我们无法把控
	 */
	// changePersonArr(state){
	// 	setTimeout(() => {
	// 		let personArr = [
	// 			{
	// 				name: 'wade',
	// 				age: 38
	// 			},
	// 			{
	// 				name: 'curry',
	// 				age: 32
	// 			}
	// 		]
	// 		state.personArr = personArr
	// 	}, 2000)
	// }
}

// 异步修改
const actions = {
	getPersonArr({commit}){
		// 模拟发请求获取异步数据
		setTimeout(() => {
			let personArr = [
				{
					name: 'wade',
					age: 38
				},
				{
					name: 'curry',
					age: 32
				}
			]
			commit('changePersonArr', personArr)
		}, 2000)
		
	}
}


const getters = {
	
}

export default {
	state,
	mutations,
	actions,
	getters
}