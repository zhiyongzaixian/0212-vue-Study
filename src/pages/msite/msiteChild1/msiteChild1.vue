<template>
	<div>
		<h2>msiteChild1</h2>
		<button @click="handleClick">触发自定义事件</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg2: '我是子组件的数据msg'
			}
		},
		mounted() {
			console.log('子 mounted');
		},
		methods: {
			handleClick(){
				console.log('click事件触发')
				this.$EventBus.$emit('myEvent', this.msg2);
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
