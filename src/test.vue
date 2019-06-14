<template>
	<div class="login">
		<h1 @click='show'>测试组件</h1>
		<h2>{{ msg }}</h2>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'test boke'
			}
		},
		methods: {
			show () {
				console.log('调用了 test.vue 中的 show 方法')
			}
		}
	}
	export let obj = {
		name: 'obj boke',
		age: 18
	}
	
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
.login {
	width: 200px;
	height: 200px;
	background-color: green;
}
h1 {
	cursor: pointer;
}
</style>