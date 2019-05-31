<template>
    <div id="slider">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" class="content-top-left">
                <svg data-v-4e6f274c="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="hamburger is-active"><path data-v-4e6f274c="" d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"></path></svg>
            </el-menu-item>

            <el-menu-item index="2" class="content-top-middle">
                <i class="el-icon-search"></i>
            </el-menu-item>

            <el-submenu index="3" class="content-top-right" style="float:right;">
                <template slot="title">
                    <img src="../../public/img/tt.png" style="width:44px;height:44px;">
                </template>
                <el-menu-item index="2-1">
                    <router-link to="/dash">Home</router-link>
                </el-menu-item>

                <el-menu-item index="2-2">
                    <a href="https://github.com/ShyGodB/Mall-Vue-Koa">Github</a>
                </el-menu-item>

                <el-menu-item id="logout" index="2-3" @click="logout">Log Out</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>


<script>
export default {
    inject: ['reload'],
    name: 'slider',
    data() {
        return {
            activeIndex: '1',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        logout() {
            this.$session.destroy();
            this.$router.push('/login');
            this.reload();
        }
    }
}
</script>


<style scoped>
a, #logout {
    text-decoration: none;
    list-style: none;
    color: #000000;
}
.content-top-left {
    float: left;
    margin-left: 20px;
}
.content-top-middle {
    float: left;
}
.content-top-right {
    float: right;
    border: 1px solid #ffffff;
    border-radius: 10px;
    margin-right: 20px;
}
.content-top-right img {
    border: 1px solid #ffffff;
    border-radius: 6px;
}
.content-end {
    margin-left: 20px;
}
.el-menu--popup {
    min-height: 60px;
}
</style>
