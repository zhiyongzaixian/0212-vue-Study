<template>
	<div id="msiteContainer">
		<h1>msite组件</h1>
		<MsiteChidl1></MsiteChidl1>
		<br>
		<br>
		<br>
		<MsiteChidl2></MsiteChidl2>
	</div>
	
</template>

<script>
	import MsiteChidl1 from './msiteChild1/msiteChild1'
	import MsiteChidl2 from './msiteChild2/msiteChild2'
	export default {
		components: {
			MsiteChidl1, MsiteChidl2
		},
		data(){
			return {
				msg: '父组件msite的数据'
			}
		},
		mounted() {
			console.log('父 mounted');
			// 绑定事件
			this.$EventBus.$on('myEvent', (myMsg) => {
				console.log('$on绑定的 自定义事件');
				console.log(myMsg)
			});
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
