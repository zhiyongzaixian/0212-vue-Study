<template>
  <div id="app">
		<h1>App 组件</h1>
		<Test></Test>
		<MyButton type='danger' :width='200' :height='60' title='button1'></MyButton>
		<MyButton type='warning' :width='100' :height='60' title='我自定义的button'></MyButton>
	</div>
</template>

<script>
export default {
  name: 'App',
	mounted(){
		this.showTip('这是我想弹出的内容')
	}
}
</script>

<style lang="stylus" scoped>
	
</style>
