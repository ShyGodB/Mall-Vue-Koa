<template>
    <div id="mainnav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" text-color="#000000" @select="handleSelect">
            <el-submenu index="1" class="f-left">
                <template slot="title">中国大陆</template>
                <el-menu-item index="1-1">香港</el-menu-item>
                <el-menu-item index="1-2">澳门</el-menu-item>
            </el-submenu>

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

            <el-menu-item index="4" class="f-left">手机商城</el-menu-item>

            <el-submenu index="5" class="f-right">
                <template slot="title">我的商城</template>
                <el-menu-item index="5-1">已购商品</el-menu-item>
                <el-menu-item index="5-2">我的足迹</el-menu-item>
            </el-submenu>

            <el-submenu index="6" class="f-right">
                <template slot="title">购物车</template>
                <el-menu-item index="6-1">最近加入</el-menu-item>
                <el-menu-item index="6-2">查看购物车</el-menu-item>
            </el-submenu>

            <el-menu-item index="7" class="f-right">收藏夹</el-menu-item>
            <el-menu-item index="8" class="f-right">心愿单</el-menu-item>

            <el-submenu index="9" class="f-right">
                <template slot="title">卖家中心</template>
                <el-menu-item index="6-1">免费开店</el-menu-item>
                <el-menu-item index="6-2">已卖出的物品</el-menu-item>
                <el-menu-item index="6-2">出售中的物品</el-menu-item>
                <el-menu-item index="6-2">已卖出的物品</el-menu-item>
                <el-menu-item index="6-2">卖家服务市场</el-menu-item>
                <el-menu-item index="6-2">卖家培训中心</el-menu-item>
                <el-menu-item index="6-2">体验中心</el-menu-item>
                <el-menu-item index="6-2">问答/求助</el-menu-item>
            </el-submenu>

            <el-submenu index="10" class="f-right">
                <template slot="title">联系客服</template>
                <el-menu-item index="6-1">消费者客服</el-menu-item>
                <el-menu-item index="6-2">卖家客服</el-menu-item>
            </el-submenu>

            <el-menu-item index="11" class="f-right">网站导航</el-menu-item>
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
            activeIndex: '1',
            activeIndex2: '1'
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
            this.reload();
            this.$router.push('/login');
        },
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
