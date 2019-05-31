<template>
    <div id="navbox">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->

        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#343a40"
            text-color="#ffffff"
            active-text-color="#FFFF00"
            :router="true"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse">

            <el-menu-item index="1" route="/dash">
                <i class="el-icon-menu"></i>
                <span slot="title">Dashboard</span>
            </el-menu-item>

            <el-menu-item index="2" route="/boss">
                <i class="el-icon-menu"></i>
                <span slot="title">商家管理</span>
            </el-menu-item>

            <el-menu-item index="3" route="/store">
                <i class="el-icon-document"></i>
                <span slot="title">店铺管理</span>
            </el-menu-item>

            <el-menu-item index="4" route="/god">
                <i class="el-icon-setting"></i>
                <span slot="title">客户管理</span>
            </el-menu-item>

            <el-menu-item index="5" route="/black">
                <i class="el-icon-setting"></i>
                <span slot="title">小小黑屋</span>
            </el-menu-item>

        </el-menu>
    </div>
</template>


<script>
export default {
    name: 'navbox',
    data() {
        return {
            isCollapse: false
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>


<style scoped>
#navbox {
    height: 100%;
}
.el-radio-group {
    box-shadow: 5px 5px 5px black;
}
.el-menu {
    height: 100%;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
}
</style>
