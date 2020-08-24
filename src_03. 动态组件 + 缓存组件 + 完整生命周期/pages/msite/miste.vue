<template>
	<div id="msiteContainer">
		<h1>msite组件</h1>
		<div class="tabs">
			<div class="tabItem" :class="{activeClass: comName === 'MsiteChidl1'}" @click="changeMsite('MsiteChidl1')">msiteChild1</div>
			<div class="tabItem" :class="{activeClass: comName === 'MsiteChidl2'}" @click="changeMsite('MsiteChidl2')">msiteChild2</div>
		</div>
		<keep-alive :exclude="['MsiteChidl2']">
			<component :is='comName' :msg='msg' :getChildMsg='getChildMsg'></component>
		</keep-alive>
		<!-- <MsiteChidl1></MsiteChidl1>
		<MsiteChidl2></MsiteChidl2> -->
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
				comName: 'MsiteChidl1',
				msg: '父组件msite的数据'
			}
		},
		methods: {
			changeMsite(comName){
				this.comName = comName
			},
			getChildMsg(childMsg){
				console.log('来自于子组件的数据： ', childMsg);
			}
		},
		errorCaptured(errObj, errVM, errMsg){
			console.log('------ errorCaptured 错误捕获 -------')
			console.log(errObj);
			console.log(this) // 当前组件实例 msite
			console.log(errVM); // 错误组件实例 msiteChild1
			console.log(errMsg);
			
			// msiteChild1VM.getChildMsg(msiteChild1VM.msg2)
			errVM.getChildMsg(errVM.msg2)
			
			
			// 阻止错误继续向上传播
			return false;
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
