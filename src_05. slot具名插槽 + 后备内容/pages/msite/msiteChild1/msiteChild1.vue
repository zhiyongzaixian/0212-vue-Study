<template>
	<div>
		<h2>msiteChild1</h2>
		<!-- 标签数据传递使用slot， 使用场景： 封装组件的时候，动态的板块，在不同的场景表现不一致，可以通过slot控制 -->
		<slot name="left">
			<!-- 插槽的默认值， 后备内容 -->
			<p>我是插槽的默认值</p>
		</slot>
		<br>
		<p>我是主公</p>
		<br>
		<slot name="right"></slot>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg2: '我是子组件的数据msg'
			}
		},
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
