<template>
    <div id="app">
        <div id="nav">
            <mainnav v-bind:user="user"></mainnav>
        </div>

        <div class="router-view" style="margin-left:40px;">
            <router-link to="/"> 主页</router-link> |
            <router-link to="/register">注册</router-link> |
            <router-link to="/login">登陆</router-link> |
            <router-link to="/userhome">用户</router-link> |
            <router-link to="/userinfo">用户信息</router-link> |
            <router-link to="/result">搜索结果</router-link> |
            <router-link to="/shopcar">购物车</router-link> |
            <router-link to="/bosshome">店主之家</router-link>
        </div>
        <router-view v-if="user.isRouterAlive === true"></router-view>

        <footer>
            <mainfoo></mainfoo>
        </footer>
    </div>
</template>


<script>
import Mainnav from './components/Mainnav.vue'
import Foo from './components/Footer.vue'


export default {
    name: 'app',
    components: {
        'mainnav': Mainnav,
        'mainfoo': Foo
    },
    data() {
        return {
            user: {
                hasUser: false,
                isRouterAlive: true
            }
        };
    },
    provide() {
        return {
            reload: this.reload
        }
    },
    methods: {
        reload() {
            this.user.isRouterAlive = false;
            if (this.$session.exists()) {
                this.user.hasUser = true;
            } else {
                this.hasUser = false;
            }
            this.$nextTick(() => {
                this.user.isRouterAlive = true;
            })
        }
    },
    created() {
        if (this.$session.exists()) {
            this.user.hasUser = true;
        } else {
            this.user.hasUser = false;
        }
    }
}
</script>


<style scoped>
</style>
