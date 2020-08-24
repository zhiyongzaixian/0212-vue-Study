<template>
	<div>
		<h2>msiteChild1</h2>
		<p>{{msg}}</p>
	</div>
</template>

<script>
	export default {
		props: ['msg', 'getChildMsg'],
		data(){
			return {
				msg2: '我是子组件的数据msg'
			}
		},
		mounted(){
			// console.log('msiteChild1 mounted');
			// 抛出错误
			console.log(aaa);
			this.getChildMsg(this.msg2)
		},
		activated(){
			// console.log('msiteChild1 activated');
			// 用来取代mounted去发送请求等初始化工作
		},
		deactivated() {
			// console.log('msiteChild1 deactivated');
			// 用来取代destoryed 做一些收尾工作
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
