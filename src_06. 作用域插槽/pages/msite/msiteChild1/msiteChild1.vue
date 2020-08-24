<template>
	<div>
		<h2>msiteChild1</h2>
	
		<br>
		<p>我是主公</p>
		<br>
		<slot name="left" :personal='personal'>{{personal.firstName}}</slot>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				personal: {
					firstName: 'curry',
					lastName: 'stephen'
				}
			}
		},
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
