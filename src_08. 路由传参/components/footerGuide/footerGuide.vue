<template>
	<div id="footerGuideContainer">
		<div class="guideItem " :class='{active: $route.path === "/msite"}' @click="handleClick('/msite')">
			<span>首页</span>
		</div>
	<!-- 	<div class="guideItem" :class='{active: $route.path === "/cateGory"}' @click="handleClick('/cateGory')" >
			<span>分类</span>
		</div> -->
		<div class="guideItem" :class='{active: $route.path === "/cateGory"}' >
			<router-link to='/cateGory'>分类</router-link>
		</div>
		
		
		
		<!-- params动态传参 -->
		<div class="guideItem" :class='{active: $route.path === "/buy"}' >
			<router-link :to="{name: 'Buy', params: {id: 1}}">值得买</router-link>
			
			<!-- params不能和path搭配使用 -->
			<!-- <router-link :to="{path: '/buy', params: {id: 1}}">值得买</router-link> -->
		</div>
		
		
		
		
		
		
		
		
<!-- 		<div class="guideItem" :class='{active: $route.path === "/buy"}' @click="handleClick('/buy')">
			<span>值得买</span>
		</div> -->
		<div class="guideItem" :class='{active: $route.path === "/cart"}' @click="handleClick('/cart')">
			<span>购物车</span>
		</div>
		<div class="guideItem" :class='{active: $route.path === "/personal"}' @click="handleClick('/personal')">
			<span>个人</span>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			handleClick(path){
				this.$router.push(path)
			}
		}
	}
</script>

<style lang="stylus">
	#footerGuideContainer
		border-top 1px solid #eee
		position fixed
		bottom 0
		left 0
		width 100%
		display flex
		height 80px
		line-height 80px
		font-size 30px
		.guideItem
			width 20%
			height 100%
			text-align center
			&.active
				color red
				a
					color red
</style>
