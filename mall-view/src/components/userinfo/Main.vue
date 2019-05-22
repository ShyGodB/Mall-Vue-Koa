<template>
    <div id="user-main">
        <el-row class="user-main-row" :gutter="50">
            <el-col :span="3" class="user-main-left">
                <h3> 全部功能</h3>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">安全设置</span>
                    </el-menu-item>

                    <el-menu-item index="2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">个人资料</span>
                    </el-menu-item>

                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">收藏夹</span>
                    </el-menu-item>

                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">购物车</span>
                    </el-menu-item>

                    <el-menu-item index="5">
                        <i class="el-icon-setting"></i>
                        <span slot="title">交易信息</span>
                    </el-menu-item>

                    <el-menu-item index="6">
                        <i class="el-icon-setting"></i>
                        <span slot="title">收货地址</span>
                    </el-menu-item>
                </el-menu>
            </el-col>

            <el-col :span="20" class="user-main-right">
                <div class="user-save">
                    <div class="user-save-top">
                        <div class="">
                            <span class="title"> 会员名：</span>
                            <input id="name" type="text" :value="name" :disabled="onOff">
                            <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidden="true">
                                <path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path>
                            </svg>
                            <button class="btn sure"> 确定 </button>
                        </div>

                        <div class="">
                            <span class="title"> 登录邮箱：</span>
                            <input id="name" type="text" :value="name" :disabled="onOff">
                            <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidden="true">
                                <path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path>
                            </svg>
                            <button class="btn sure"> 确定 </button>
                        </div>

                        <div class="">
                            <span class="title"> 登录手机：</span>
                            <input id="name" type="text" :value="name" :disabled="onOff">
                            <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidden="true">
                                <path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path>
                            </svg>
                            <button class="btn sure"> 确定 </button>
                        </div>
                    </div>

                    <div class="user-save-line"></div>

                    <div class="user-save-end">
                        <h3>您的安全服务</h3>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>

export default {
    name: 'user-main',
    data() {
        return {
            onOff: true,
            name: 'abc'
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
/* 总体 */
#user-main {
    width: 100%;
    padding: 0 10px;
    min-height: 600px;
    background: #FFFFFF;
}

/* 左 */
.user-main-middle  {
    min-height: 720px;
}
h3 {
    color: #ff5000;
    text-align: center;
    margin-bottom: 10px;
}

/* 右 */
.user-main-right {
    min-height: 720px;
}
input {
    display: inline-block;
    border: 0;
    width: 315px;
    height: 30px;
    margin: 20px 20px ;
}
.user-save-top {
    padding: 10px;
    margin: 20px 0;
    border: 1px solid #808080;
    border-radius: 20px;
}
.user-save-line {
    border: 1px solid #808080;
}
.user-save-end {
    padding: 10px;
    margin: 20px 0;
    min-height: 500px;
    border: 1px solid #808080;
    border-radius: 20px;
}
</style>
