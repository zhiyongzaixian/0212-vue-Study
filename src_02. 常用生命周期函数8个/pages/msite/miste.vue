<template>
	<div id="msiteContainer">
		<h1>msite组件</h1>
		<p>{{num}}</p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg: 'msite初始化数据',
				num: 1
			}
		},
		// C M U D
		beforeCreate(){
			console.log('----- beforeCreate ------');
			// 实例初始化之后，数据劫持代理之前
			console.log(this)
			console.log(this.msg) // undefined
			console.log(this.$options.data().msg) // msite初始化数据
		},
		created(){
			console.log('----- created ------');
			// 已经实现了数据劫持和代理
			console.log(this.msg)
		},
		beforeMount(){
			console.log('----- beforeMount 即将要挂载------');
			// debugger;
			// 也可以在mounted之前发请求，1. 数据量较小，2. 要求页面显示的一定是最新的数据
		},
		mounted(){
			console.log('----- mounted 挂载完毕------');
			// 通常用于发送ajax请求，开启定时器，不影响页面初始化渲染
			
			this.intervalId = setInterval(() => {
				console.log('setInterval()')
				this.num++
			}, 1000)
			setTimeout(() => {
				// 销毁当前的组件
				this.$destroy()
			}, 4000)
		},
		beforeUpdate(){
			console.log('----- beforeUpdate ------');
		},
		updated(){
			console.log('----- updated ------');
		},
		beforeDestroy(){
			console.log('----- beforeDestroy 即将要销毁------');
			// Vue的销毁： 1. 销毁的是组件的实例， 2. 页面保留销毁之前的状态 3. 切断组件和页面的联系 4. 动态数据 --> 静态数据
		},
		destroyed(){
			console.log('----- destroyed 已经销毁------');
			// 通常做一些收尾工作，如： 关闭定时器，清除缓存，
			clearInterval(this.intervalId)
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
