<template>
	<div>
		<h2>msiteChild2</h2>
	
	</div>
</template>

<script>
	export default {
		mounted(){
			console.log('msiteChild2 mounted');
		},
		activated(){
			console.log('msiteChild2 activated');
		},
		deactivated() {
			console.log('msiteChild2 deactivated');
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
