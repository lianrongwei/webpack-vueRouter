<template>
    <div>
        <h1>Account.vue</h1>
        <router-link to="/account/login" replace>登录</router-link>
        <router-link to="/account/register" replace>注册</router-link>
        <!-- <router-link to="/account/login" tag="span" replace>登录</router-link>
        <router-link to="/account/register"  tag="span" replace>注册</router-link> -->
        <transition mode=out-in>
            <router-view></router-view>
        </transition>
    </div>
</template>
<script></script>
<style lang='less' scoped>
	/*lang设置语言 scoped是局部*/
	@color: green;

	.myLinkClass {
	    color: @color;
	    font-weight: 800;
	    transition: all 0.4s line;
	}

	.v-enter,
	.v-leave-to {
	    opacity: 0;
	    transform: translateX(-250px);
	}

	.v-enter-active,
	.v-leave-active {
	    transition: all 0.6s ease;
	}

	span {
		cursor: pointer;
	}
</style>