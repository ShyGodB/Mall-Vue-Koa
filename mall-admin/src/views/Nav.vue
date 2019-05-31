<template>
    <div id="navbar">
        <div class="navbar-top" style="height:200px;background:red;">

        </div>

        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          style="border-right: solid 1px #404040;""
          @open="handleOpen"
          @close="handleClose"
          background-color="#404040"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>

                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-4">选项4</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>

            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>


<script>
export default {
    name: 'navbar',
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
#navbar {
    height: 100%;
    background: #000000;
}
.el-menu {
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
}
</style>
