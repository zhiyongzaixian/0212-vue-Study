<template>
	<div id="msiteContainer">
		<div v-if="$route.path === '/msite'">
			<h1>msite组件</h1>
			<ul>
				<li v-for="(item, index) in personList" :key='index'>{{item.name}}</li>
			</ul>
			<router-link to='/msite/msiteChild1'>msiteChild1的路由链接</router-link>
			<br>
			<br>
		</div>
		
		
		<router-view></router-view>
	</div>
	
</template>

<script>
	import {mapMutations, mapActions, mapState} from 'vuex'
	export default {
		data(){
			return {
				
			}
		},
		mounted() {
			// this.changePersonArr(personArr)
			
			// 测试mutation异步修改
			// this.changePersonArr()
			// 分发action
			this.getPersonArr()
		},
		methods: {
			...mapMutations({
				changePersonArr: 'changePersonArr'
			}),
			...mapActions({
				getPersonArr: 'getPersonArr'
			})
		},
		computed: {
			...mapState({
				personList: state => state.home.personArr
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.tabs
		display flex
		.tabItem
			width 50%
			height 80px
			line-height 80px
			text-align center
			border 1px solid #eee
			&.activeClass
				color red
				border-color red
</style>
