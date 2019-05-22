<template>
    <div class="body-navbar">
        <el-menu :second-active="secondActiveIndex" class="el-menu-demo" mode="horizontal" background-color="#ff9000" text-color="#FFFFFF" @select="secondSelectNavbar">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
            <el-menu-item index="3">处理中心</el-menu-item>
            <el-menu-item index="4">处理中心</el-menu-item>
            <el-menu-item index="5">处理中心</el-menu-item>
            <el-menu-item index="6">处理中心</el-menu-item>
            <el-menu-item index="7">处理中心</el-menu-item>
            <el-menu-item index="8">处理中心</el-menu-item>
            <el-menu-item index="9">处理中心</el-menu-item>
        </el-menu>
    </div>
</template>


<script>
export default {
    name: 'body-navbar',
    data() {
      return {
        secondActiveIndex: '1',
        secondActiveIndex2: '1'
      };
    },
    methods: {
      secondSelectNavbar(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
