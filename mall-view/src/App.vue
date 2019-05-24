<template>
    <div id="app">
        <div id="nav">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" text-color="#000000" @select="handleSelect">
                <el-submenu index="1" class="f-left">
                    <template slot="title">中国大陆</template>
                    <el-menu-item index="1-1">香港</el-menu-item>
                    <el-menu-item index="1-2">澳门</el-menu-item>
                </el-submenu>

                <el-menu-item index="2" class="f-left">请登录</el-menu-item>
                <el-menu-item index="3" class="f-left">免费注册</el-menu-item>
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

        <div class="router-view" style="margin-left:40px;">
            <router-link to="/"> 主页</router-link> |
            <router-link to="/register">注册</router-link> |
            <router-link to="/login">登陆</router-link> |
            <router-link to="/userhome">用户</router-link> |
            <router-link to="/userinfo">用户信息</router-link> |
            <router-link to="/search">商品搜索</router-link>
        </div>
        <router-view/>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style scoped>

#app #nav {
    margin:0 40px;
}
#nav .f-left {
    float: left;
}

#nav .f-right {
    float: right;
}

</style>
