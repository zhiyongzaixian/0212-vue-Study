<template>
	<div>
		<button :class='{danger: type === "danger", warning: type === "warning"}' :style="{width: width + 'px', height: height + 'px'}">{{title}}</button>
	</div>
</template>

<script>
	export default {
		props: {
			type: String,
			height: {
				type: Number,
				default: 100
			},
			width: {
				type: Number,
				default: 100
			},
			title: {
				type: String,
				default: '志勇button'
			}
			
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	button
		border none
		background #007AFF
		&.danger
			background red
			color #fff
		&.warning
			background yellow
			color #333
</style>
