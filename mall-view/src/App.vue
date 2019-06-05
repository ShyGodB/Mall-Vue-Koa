<template>
    <div id="app">
        <div id="nav">
            <mainnav v-bind:user="user"></mainnav>
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
                this.user.hasUser = false;
            }
            this.$nextTick(() => {
                this.user.isRouterAlive = true;
            })
        }
    }
}
</script>


<style scoped>
#mainnav {
    margin-bottom: 20px;
}
</style>
