<template>
	<div id="msiteContainer">
		<h1>msite组件</h1>
		<MsiteChidl1>
			<!-- <p>我是导入的内容</p> -->
			<template v-slot:left="{personal}">
				<p>{{personal.lastName}}</p>
			</template>
		</MsiteChidl1>
		<br>
		<br>
		<br>
		<MsiteChidl2 :msg='msg'></MsiteChidl2>
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
