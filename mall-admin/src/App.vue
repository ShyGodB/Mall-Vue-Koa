<template>
    <div id="app">
        <div class="hadLogin" v-if="hasUser === true">
            <nav class="navbar el-col-4">
                <navbar></navbar>
            </nav>

            <main class="content el-col-20">
                <div class="content-top">
                    <topbar></topbar>
                </div>

                <div class="content-end">
                    <router-view v-if="isRouterAlive === true"></router-view>
                </div>
            </main>
        </div>

        <div class="notLogin" v-if="hasUser === false">
            <login></login>
        </div>
    </div>
</template>


<script>
import Navbar from './components/Nav.vue'
import Topbar from './components/Topbar.vue'
import Login  from './views/Login.vue'

export default {
    name: 'app',
    components: {
        'navbar': Navbar,
        "topbar": Topbar,
        'login': Login
    },
    provide() {
        return {
            reload: this.reload
        }
    },
    data() {
        return {
            activeIndex: '1',
            hasUser: false,
            isRouterAlive: true
        }
    },
    methods: {
        reload() {
            this.isRouterAlive = false;
            if (this.$session.exists()) {
                this.hasUser = true;
            } else {
                this.hasUser = false;
            }
            this.$nextTick(() => {
                this.isRouterAlive = true;
            })
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    created() {
        if (this.$session.exists()) {
            this.hasUser = true;
            this.$router.push('/dash');
        } else {
            this.hasUser = false;
            this.$router.push('/login');
        }
    }
}
</script>


<style>
nav {
    height: 800px;
}
main {
    height: 800px;
}
.content-top {
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    background: #ffffff;
}
.content-end {
    margin-left: 20px;
}
</style>
