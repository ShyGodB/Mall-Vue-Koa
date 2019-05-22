<template>
    <div id="user-navbar">
        <el-menu :default-active="activeIndex" class="el-menu" background-color="#ff5000" text-color="#ffffff" text-size="24px" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">我的商城</el-menu-item>
            <el-menu-item index="2">首页</el-menu-item>
            <el-submenu index="3">
                <template slot="title">账户设置</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">消息</el-menu-item>
        </el-menu>
    </div>
</template>


<script>

export default {
    name: 'user-navbar',
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
#user-navbar {
    width: 100%;
    padding: 12px;
    text-align: center;
    margin-bottom: 40px;
    background: #ff5000;
}
</style>
