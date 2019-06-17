<template>
    <div id="mainnav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" text-color="#000000" @select="handleSelect">
            <el-menu-item index="1" class="f-left">
                <router-link to="/">主页</router-link>
            </el-menu-item>

            <div class="" v-if="user.hasUser === false">
                <el-menu-item index="2" class="f-left">
                    <router-link to="/login">请登陆</router-link>
                </el-menu-item>
            </div>

            <div class="" v-if="user.hasUser === true">
                <el-menu-item index="2" class="f-left">
                    <el-menu-item index="2-1" @click="logout">退出</el-menu-item>
                </el-menu-item>
            </div>

            <el-menu-item index="3" class="f-left">
                <router-link to="/register">免费注册</router-link>
            </el-menu-item>

            <el-menu-item index="4" class="f-left">
                <router-link to="/bosshome">店主之家</router-link>
            </el-menu-item>

            <el-menu-item index="5" class="f-left">
                <router-link to="/userhome">用户中心</router-link>
            </el-menu-item>

            <el-menu-item index="6" class="f-left">
                <router-link to="/userinfo">用户信息</router-link>
            </el-menu-item>

            <el-menu-item index="7" class="f-right">
                <router-link to="/result/电脑/complex">搜索结果</router-link>
            </el-menu-item>

            <el-menu-item index="8" class="f-right">
                <router-link to="/shopcar">购物车</router-link>
            </el-menu-item>

            <el-menu-item index="9" class="f-right">
                <router-link to="/good/7">商品</router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>


<script>
export default {
    inject: ['reload'],
    name: 'mainnav',
    props: ['user'],
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        },
        logout() {
            this.$session.destroy();
            if (this.$session.exists()) {
                this.user.hasUser = true;
            } else {
                this.user.hasUser = false;
            }
            this.$router.push('/login');
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
#mainnav .f-left {
    float: left;
}

#mainnav .f-right {
    float: right;
}
a {
    text-decoration: none;
}
.router-link-active {
    text-decoration: none;
}
</style>
