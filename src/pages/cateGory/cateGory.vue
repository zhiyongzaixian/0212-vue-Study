<template>
	<div>
		<h1>cateGory 组件</h1>
		
		<!-- query参数 -->
		<!-- <router-link to="/cateGory/cateChild?a=1&b=2">cateChild路由链接</router-link> -->
		<!-- <router-link :to="{path: '/cateGory/cateChild', query: {a: 1, b: 2}}">cateChild路由链接</router-link> -->
		<router-link :to="{path: '/cateGory/cateChild', query: {a: 1, b: 2}}">cateChild路由链接</router-link>
		
		
		<!-- params参数 -->
		<!-- <router-link to="/cateGory/cateChild/123">cateChild路由链接</router-link> -->
		<!-- <router-link :to="{name: 'cateChild', params: {a: 1}}">cateChild路由链接</router-link> -->
		
		<br>
		<br>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
