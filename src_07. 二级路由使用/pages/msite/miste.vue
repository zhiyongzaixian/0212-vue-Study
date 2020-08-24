<template>
	<div id="msiteContainer">
		<div v-if="$route.path === '/msite'">
			<h1>msite组件</h1>
			<router-link to='/msite/msiteChild1'>msiteChild1的路由链接</router-link>
			<br>
			<br>
		</div>
		
		
		<router-view></router-view>
	</div>
	
</template>

<script>
	
	export default {
	
		data(){
			return {
				
			}
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
