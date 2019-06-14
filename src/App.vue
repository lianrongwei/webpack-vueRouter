<template>
	<div>
		<h1>App.vue</h1>
		<router-link to="/account" replace>Account</router-link>
		<router-link to="/goodslist" replace>GoodsList</router-link>
		<transition name='my' mode='out-in'>
			<router-view></router-view>
		</transition>
	</div>
</template>
<script></script>
<style scoped>
	.myLinkClass {
		color: red;
		font-weight: 700;
		transition: all 0.4s line;
	}
	.my-enter,
	.my-leave-to {
		opacity: 0;
		transform: translateX(-150px);
	}
	.my-enter-active,
	.my-leave-active {
		transition: all 0.4s ease;
	}
</style>