<template>
	<div>
		<h2>cateGory 组件</h2>
		<ul>
			<li v-for="(item, index) in personList" :key='index'>{{item.name}}</li>
		</ul>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default {
		
		mounted(){
			let personListData = sessionStorage.getItem('personList')
			
			personListData && this.changePersonArr(JSON.parse(personListData))
			
			// 在页面刷新之前将Vuex中的数据保存至sessionStorage
			window.addEventListener('beforeunload', () => {
				// console.log(111111111111111111111111111111);
				sessionStorage.setItem('personList', JSON.stringify(this.personList))
			})
		},
		methods: {
			...mapMutations({
				changePersonArr: 'changePersonArr'
			})
		},
		computed: {
			...mapState({
				personList: state => state.home.personArr
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
