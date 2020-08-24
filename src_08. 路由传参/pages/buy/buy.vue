<template>
	<div>
		buy 组件
		<p>params参数： {{$route.params.id}}</p>
		<!-- 布尔值参数 -->
		<p>props参数id： {{id}}</p>
		<p>props参数a： {{a}}</p>
		<p>props参数b： {{b}}</p>
		<p>props参数path： {{path}}</p>
	</div>
</template>

<script>
	export default {
		props: ['id', 'a', 'b', 'path']
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
