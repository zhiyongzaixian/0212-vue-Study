<template>
	<div id="msiteContainer">
		<div class="swiper-container">
		  <div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in swiperList" :key='item'>
					<img :src="item" alt="">
				</div>
		  </div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	export default {
		data(){
			return {
				swiperList: []
			}
		},
		mounted(){
			setTimeout(() => {
				this.swiperList = [
					'https://yanxuan.nosdn.127.net/f371bd7a19e2d234e303d0e55a633f7e.png?type=webp&imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/139c0cd6907bbf5c6228a57d0062d41a.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/f9640236226a29e33e0fffbc83de5db6.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
				]
			}, 2000);
		},
		watch: {
			swiperList(){
				// $nextTick 页面下一次渲染结束
				this.$nextTick(() => {
					new Swiper('.swiper-container', {
						pagination: {
							el: '.swiper-pagination',
						},
					})
				})
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	/* scoped: 作用：使得当前style的样式只作用在当前的组件身上， 原理： 加上scoped属性会自动在当前组件的所有标签身上添加一个 hash属性, 会使得所有的样式除了自身的属性还要求标签属性也满足的情况下样式才会生效*/
	#msiteContainer
		.swiper-container
			width 100%
			height 300px
			img
				width 100%
				height 300px
			.swiper-pagination
				/deep/.swiper-pagination-bullet-active
					background red
</style>
