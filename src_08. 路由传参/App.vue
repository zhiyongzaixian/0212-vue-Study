<template>
  <div id="app">
		<!-- <h1>App 组件</h1>
		<p>测试1</p> -->
		
		<router-view></router-view>
		<FooterGuide v-if='$route.meta.isShowFooter'></FooterGuide>
	</div>
</template>

<script>
import FooterGuide from './components/footerGuide/footerGuide.vue'
export default {
  name: 'App',
  components:{
		FooterGuide
	}
}
</script>

<style lang="stylus" scoped>
	p
		width 750px
		height 80px
		line-height 80px
		background #42B983
</style>
